import { useEffect, useState } from "react";
import { Button, Checkbox } from "@nextui-org/react";
import { Link } from "wouter"
// import "./Shipping.css"
import { openBeaveryLink } from "../utils";

const Shipping = () => {
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const [showCheckboxError, setShowCheckboxError] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="m-auto grid text-left max-w-[38.2%] xl:max-w-[38.2%] justify-center" >
      <div>
        <h1 className="text-6xl mb-24 mt-24 text-center">Shipping Policy</h1>
        <p>
          1. Request shipping within 1 week,
          <p className="text-orange-500 font-bold">
            ***We will send the link after Auction closed. Shipping link will be send in your invoice email. Then you need to follow the link in your email request shipping service by yourself.***
          </p>
          Shipping requests must be made within 1 week following the auction close. We can not promise that we can ship your items if you placed your shipping request after the 1 week timeline. For fastest shipping, we recommend to place your shipping request after Auction Closed.
        </p>
        <br />
        <p>
          2. Usually they pick up on every Wednesday and Saturday, but changes will be made during the holidays. They will send the shipping invoice after picke up, you may have to wait a day or two, they close on weekend. For shipping invoce, you need to double check your junk mail.
        </p>
        <br />
        <p>
          3. Registration ONLY with Beavery The only way we can ship items out is via Beavery. You must create an account with your own username and password. Once that is created, you are able to place shipping request. You can then view your shipping invoice, and status of the request.
        </p>
        <br />
        {/* <p>
          4. Shipping Cost: You can find shipping cost through the following link:
          <br />
          Beavery:
          <a className="text-orange-400" href="https://beavery.ca/auction-house-delivery"> https://beavery.ca/auction-house-delivery</a>
          &nbsp;Email:&nbsp;
          <a className="text-orange-400" href="mailto: support@beavery.ca">support@beavery.ca </a>
        </p> */}
        <br />
        <p className="font-bold">
          4. About Return:
        </p>
        <br />
        <p>
          4.1 If there is an issue with your shipped item,
          please notify us first and obtain our permission before returning it to us.
          Once we verify the problem, we will proceed with a refund,
          which will be processed within 3-5 working days after we receive the returned item.
          <span className="text-orange-400 font-bold"> Please note that the refund does not include shipping fees, handling fees, and Buyer's premium charges. </span>
          All items are sourced from major e-commerce platforms and most of them are returned Items.
          Therefore, we advise you consider the risks during transportation before opting for shipping.
        </p>
        <br />
        <p>
          4.2 Please ensure that the original packaging in which the item was sold is included when returning it. Returns without the original packaging will not be accepted.
        </p>
        <br />
        <p>
          4.3 Fill out the return authorization form completely and send it via email to <a className="Link-Ship" href="mailto:service@258.ca"> service@258.ca.</a>
          This step is crucial for us to understand why the item is being returned.
        </p>
        <br />
        <p>
          4.4 Returns must be initiated within 3 days of receiving the item to meet the warranty deadline.
        </p>
        <br />
        <p>
          4.5 All returns must be approved by a manager before processing.
        </p>
        <br />
      </div>
      <div>
        <Checkbox isSelected={agreeTerms} onValueChange={setAgreeTerms}>
          <div className="">
            <span>I have read and agree all the content above, <br />including the </span>
            <Link href='/privacy-policy'> Privacy Policy </Link>
            <span> and the </span>
            Terms and Conditions<sup className="required-field">*</sup>
          </div>
        </Checkbox>
        {showCheckboxError && (<p className="required-field font-lg">Please agree to the terms and conditions before shipping.</p>)}
      </div>
      <div className="grid mt-12">
        <Button
          radius="full"
          className="p-8 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg Button-Ship-Child"
          onClick={() => (agreeTerms ? openBeaveryLink() : setShowCheckboxError(true))}
        >
          <p className="text-2xl lg:text-3xl">Ship Now</p>
        </Button>
      </div>
    </div>
  )
}

export default Shipping
