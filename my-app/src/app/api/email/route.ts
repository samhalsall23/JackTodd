import { NextResponse } from "next/server";
import axios from "axios";

export const POST = async (req: Request) => {
  const formData = await req.json();
  const data = {
    service_id: process.env.SERVICE_KEY,
    template_id: process.env.TEMPLATE_KEY,
    user_id: process.env.API_KEY,
    template_params: formData,
    accessToken: process.env.API_KEY_PRIVATE,
  };

  try {
    await axios({
      method: "post",
      url: "https://api.emailjs.com/api/v1.0/email/send",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
