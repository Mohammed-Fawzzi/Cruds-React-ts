import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("الاسم مطلوب")
    .min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  userName: Yup.string()
    .required("اسم المستخدم مطلوب")
    .min(3, "اسم المستخدم يجب أن يكون 3 أحرف على الأقل"),
  email: Yup.string()
    .email("صيغة البريد الإلكتروني غير صحيحة")
    .required("البريد الإلكتروني مطلوب"),
  phone: Yup.string().required("رقم الهاتف مطلوب"),
  age: Yup.number().typeError("العمر يجب أن يكون رقم").required("العمر مطلوب"),
  city: Yup.string().required("المدينة مطلوبة"),
  role: Yup.string().required("الدور مطلوب"),
});
