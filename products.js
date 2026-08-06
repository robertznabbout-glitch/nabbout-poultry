/*
  ============================================================
  SYOUFI HUNTING PRODUCTS
  ============================================================

  لإضافة منتج جديد:
  1. انسخ منتجًا كاملًا من القائمة.
  2. غيّر id إلى رقم جديد غير مكرر.
  3. غيّر الاسم والسعر والفئة والوصف.
  4. ضع صورة المنتج داخل:
     assets/images/
  5. اكتب مسار الصورة مثل:
     assets/images/product-1.jpg

  inquiryOnly:
  false = المنتج يدخل إلى السلة.
  true  = يظهر زر استفسار عبر واتساب بدل إضافته إلى السلة.

  active:
  true  = المنتج ظاهر.
  false = المنتج مخفي.
*/

const PRODUCTS = [
  {
    id: 1,
    nameAr: "منظار ميداني",
    nameEn: "Field Binoculars",
    categoryAr: "مناظير",
    categoryEn: "Optics",
    descriptionAr: "منظار عملي للرحلات والمراقبة في الطبيعة.",
    descriptionEn: "Practical binoculars for outdoor observation and trips.",
    price: 75,
    oldPrice: 90,
    image: "",
    featured: true,
    inStock: true,
    inquiryOnly: false,
    active: true
  },

  {
    id: 2,
    nameAr: "حقيبة معدات",
    nameEn: "Gear Backpack",
    categoryAr: "حقائب",
    categoryEn: "Bags",
    descriptionAr: "حقيبة متينة لتنظيم معدات الرحلات والصيد.",
    descriptionEn: "Durable backpack for organizing hunting and outdoor gear.",
    price: 48,
    oldPrice: null,
    image: "",
    featured: true,
    inStock: true,
    inquiryOnly: false,
    active: true
  },

  {
    id: 3,
    nameAr: "مصباح رأس قابل للشحن",
    nameEn: "Rechargeable Head Lamp",
    categoryAr: "إضاءة",
    categoryEn: "Lighting",
    descriptionAr: "إضاءة قوية وعملية للاستخدام في الرحلات والمناطق الخارجية.",
    descriptionEn: "Powerful and practical lighting for outdoor and camping use.",
    price: 22,
    oldPrice: 28,
    image: "",
    featured: false,
    inStock: true,
    inquiryOnly: false,
    active: true
  },

  {
    id: 4,
    nameAr: "منتج للاستفسار",
    nameEn: "Inquiry Product",
    categoryAr: "معدات",
    categoryEn: "Equipment",
    descriptionAr: "تواصل معنا عبر واتساب لمعرفة التفاصيل والتوفر.",
    descriptionEn: "Contact us on WhatsApp for details and availability.",
    price: 0,
    oldPrice: null,
    image: "",
    featured: false,
    inStock: true,
    inquiryOnly: true,
    active: true
  }
];
