import { redirect } from "next/navigation";

const APPLE_APP_ID = "6759001437";

interface ReferralPageProps {
  params: Promise<{ affiliate: string }>;
}

export default async function ReferralPage({ params }: ReferralPageProps) {
  const { affiliate } = await params;
  const code = `PRAYWITH${affiliate.toUpperCase()}`;
  const redeemUrl = `https://apps.apple.com/redeem?ctx=offercodes&id=${APPLE_APP_ID}&code=${code}`;

  redirect(redeemUrl);
}
