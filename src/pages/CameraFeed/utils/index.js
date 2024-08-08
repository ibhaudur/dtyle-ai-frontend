import CustomInput from "../../../component/Forms/CustomInput";
import Email from "../../../../public/image/social-media/mail.svg";
import Telegram from "../../../../public/image/social-media/telegram.svg";
import Whatsapp from "../../../../public/image/social-media/whatsapp.svg";

export const CustemAlertField = [
  {
    tag: CustomInput,
    type: "text",
    placeholder: "Enter email address",
    image: Email,
  },
  {
    tag: CustomInput,
    type: "text",
    placeholder: "Enter Whatsapp number",
    image: Whatsapp,
  },
  {
    tag: CustomInput,
    type: "text",
    placeholder: "Enter Telegram number",
    image: Telegram,
  },
];
