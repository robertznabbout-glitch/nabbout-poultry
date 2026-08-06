# Syoufi Hunting — GitHub Pages

هذا المشروع موقع متجر إلكتروني ثابت يعمل على **GitHub Pages فقط**.

## الميزات

- عربي وإنجليزي.
- متجاوب مع الهاتف والكمبيوتر.
- سلة شراء تعمل داخل المتصفح.
- الدفع عند الاستلام.
- إرسال الطلب كاملًا عبر واتساب.
- البحث وتصفية الفئات.
- رابط Google Maps.
- لا يحتاج Node.js أو قاعدة بيانات أو سيرفر.

## تعديل المنتجات

افتح الملف:

```text
products.js
```

ستجد المنتجات داخل:

```js
const PRODUCTS = [
  ...
];
```

لإضافة منتج:

1. انسخ منتجًا كاملًا.
2. غيّر `id` إلى رقم جديد.
3. غيّر الاسم والسعر والوصف والفئة.
4. ضع صورة المنتج داخل:

```text
assets/images/
```

ثم اكتب مسار الصورة مثل:

```js
image: "assets/images/product-1.jpg"
```

## رفعه على GitHub Pages

1. أنشئ Repository جديدًا على GitHub.
2. ارفع جميع الملفات والمجلدات الموجودة داخل هذا المشروع.
3. افتح:

```text
Settings → Pages
```

4. تحت **Build and deployment** اختر:

```text
Deploy from a branch
```

5. اختر:

```text
Branch: main
Folder: / (root)
```

6. اضغط Save.

بعد دقائق سيعطيك GitHub رابط الموقع.

## بيانات المتجر الموجودة حاليًا

- WhatsApp: +961 70 568 469



- Google Maps: 34.5303786, 36.0887009
- Payment: Cash on delivery
