import { NextRequest, NextResponse } from "next/server";

interface OrderData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: OrderData = await request.json();

    // Validate required fields
    if (!data.name || !data.phone || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get Telegram bot credentials from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const channelId = process.env.TELEGRAM_CHANNEL_ID;

    if (!botToken || !channelId) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Format phone number for display
    const formatPhone = (phone: string) => {
      const digits = phone.replace(/\D/g, "");
      if (digits.length === 9) {
        return `+998 ${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 7)} ${digits.slice(7)}`;
      }
      return phone;
    };

    // Format the message for Telegram
    const telegramMessage = `
🛒 <b>New Order Received</b>

👤 <b>Name:</b> ${data.name}
🏢 <b>Company:</b> ${data.company || "Not provided"}
📞 <b>Phone:</b> ${formatPhone(data.phone)}
📧 <b>Email:</b> ${data.email || "Not provided"}

📝 <b>Message:</b>
${data.message}

📅 <b>Date:</b> ${new Date().toLocaleString("en-US", {
      timeZone: "Asia/Tashkent",
    })}
`.trim();

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: channelId,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Telegram API error:", errorText);
      return NextResponse.json(
        { error: "Failed to send message to Telegram" },
        { status: 500 }
      );
    }

    const result = await response.json();
    console.log("Telegram response:", result);

    return NextResponse.json(
      { success: true, message: "Order submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Order submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
