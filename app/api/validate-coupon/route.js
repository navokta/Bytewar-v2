// app/api/validate-coupon/route.js
export async function POST(request) {
  const { code } = await request.json();
  
  // Valid coupon codes that give ₹50 discount (set amount to ₹100)
  const validCoupons = [
    "bytewar10",
    "hack23", 
    "dev33",
    "codex15",
    "tech25"
  ];

  const isValid = validCoupons.includes(code);
  
  return Response.json({
    valid: isValid,
    message: isValid ? "Coupon applied! ₹50 discount" : "Invalid coupon code",
    discountedAmount: isValid ? 100 : 150
  });
}