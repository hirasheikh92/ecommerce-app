import Wrapper from "@/components/view/Wrapper";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <Wrapper className=''>
      <SignIn />
    </Wrapper>
  );
}
