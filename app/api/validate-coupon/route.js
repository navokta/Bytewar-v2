// app/api/validate-coupon/route.js

// Predefined coupons with discount percentages
const COUPONS = {
  SAVE33: { discountPercent: 33 },   // 33% off → ₹100.5
  DIVINE33: { discountPercent: 33 }, // 33% off → ₹75
  EARLYBIRD20: { discountPercent: 20 }, // 20% off → ₹120
  TOPPERS33: { discountPercent: 33 },  // 33% off → ₹127.5
  BYTE33: { discountPercent: 33 },   // 33% off → ₹100.5
  BHAVYSHARMA: { discountPercent: 99 },   // 33% off → ₹100.5
  TANISHNIET33: { discountPercent: 33 },   // 33% off → ₹100.5
  SHARMA33: { discountPercent: 33 },   // 33% off → ₹100.5
  DUBEY33: { discountPercent: 33 },   // 33% off → ₹100.5
  LAKSHAY33: { discountPercent: 33 },   // 33% off → ₹100.5
  CHIRAG33: { discountPercent: 33 },   // 33% off → ₹100.5
  // Add more coupons as needed
};

export async function POST(request) {
  try {
    const { code } = await request.json();

    // Validate input
    if (!code || typeof code !== 'string') {
      return Response.json(
        {
          valid: false,
          message: 'Coupon code is required.',
          discountedAmount: 150,
        },
        { status: 400 }
      );
    }

    const couponKey = code.trim().toUpperCase();
    const coupon = COUPONS[couponKey];

    if (!coupon) {
      return Response.json(
        {
          valid: false,
          message: 'Invalid or expired coupon code.',
          discountedAmount: 150,
        },
        { status: 400 }
      );
    }

    const originalAmount = 150;
    const discountPercent = coupon.discountPercent;
    const discountedAmount = parseFloat((originalAmount * (1 - discountPercent / 100)).toFixed(2));

    return Response.json({
      valid: true,
      message: `Coupon applied! ${discountPercent}% off.`,
      discountPercent,
      discountedAmount,
    });
  } catch (error) {
    console.error("Error validating coupon:", error);
    return Response.json(
      {
        valid: false,
        message: "Failed to validate coupon. Please try again.",
        discountedAmount: 150,
      },
      { status: 500 }
    );
  }
}