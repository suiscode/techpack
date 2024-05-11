import * as z from "zod";

// import { loginSchema } from "../../../../lib/schema";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { RegisterSchema } from "@/lib/schema";
import { getUserByEmail } from "@/lib/user-data";
import { db } from "@/lib/db";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const validatedFields = RegisterSchema.safeParse(body);

  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }
  try {
    const { email, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email);

    if (existingUser)
      return NextResponse.json({ error: "Email is in use" }, { status: 400 });

    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const newCV = await db.cV.create({
      data: {
        email,
      },
    });

    // Step 3: Associate the CV with the user
    await db.user.update({
      where: {
        id: newUser.id,
      },
      data: {
        cv: {
          connect: {
            id: newCV.id,
          },
        },
      },
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return NextResponse.json(
      { success: "Confirmation email sent" },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }
};
