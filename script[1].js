"use strict";

const WHATSAPP_NUMBER = "96170568469";
const CART_STORAGE_KEY = "syoufi_hunting_cart";
const LANGUAGE_STORAGE_KEY = "syoufi_hunting_language";

const translations = {
  en: {
    brandTagline: "Hunting & Outdoor Store",
    home: "Home",
    shop: "Shop",
    about: "About",
    contact: "Contact",
    cart: "Cart",
    heroEyebrow: "Hunting • Outdoor • Adventure",
    heroTitle: "Gear made for the wild.",
    heroText: "Shop hunting, camping and outdoor equipment with direct WhatsApp ordering and cash on delivery.",
    shopNow: "Shop now",
    contactWhatsapp: "Contact on WhatsApp",
    cashTitle: "Cash on delivery",
    cashText: "Pay when your order arrives.",
    supportTitle: "WhatsApp support",
    supportText: "Direct contact before and after ordering.",
    locationTitle: "Store location",
    locationText: "Open our location directly on Google Maps.",
    catalogue: "Catalogue",
    productsTitle: "Our products",
    searchPlaceholder: "Search products",
    allCategories: "All categories",
    emptyProducts: "No products found.",
    aboutEyebrow: "About us",
    aboutTitle: "Syoufi Hunting",
    aboutText: "A specialized store for hunting, outdoor, camping and adventure equipment with direct customer service and carefully selected products.",
    askProduct: "Ask about a product",
    contactEyebrow: "Contact",
    contactTitle: "Visit or contact Syoufi Hunting",
    contactText: "Call us or open the store location on Google Maps.",
    openMaps: "Open Google Maps",
    yourCart: "Your cart",
    total: "Total",
    checkout: "Checkout",
    checkoutTitle: "Complete your order",
    checkoutText: "Payment method: cash on delivery.",
    fullName: "Full name",
    phone: "Phone number",
    area: "City / Area",
    address: "Delivery address",
    notes: "Notes",
    sendOrder: "Send order on WhatsApp",
    add: "Add",
    inquiry: "Ask on WhatsApp",
    outOfStock: "Out of stock",
    featured: "Featured",
    remove: "Remove",
    emptyCart: "Your cart is empty.",
    added: "Added to cart.",
    addProductsFirst: "Add products before checkout.",
    orderOpening: "Opening WhatsApp..."
  },

  ar: {
    brandTagline: "متجر الصيد والرحلات",
    home: "الرئيسية",
    shop: "المتجر",
    about: "من نحن",
    contact: "تواصل معنا",
    cart: "السلة",
    heroEyebrow: "صيد • رحلات • مغامرات",
    heroTitle: "معدات صنعت للمغامرة.",
    heroText: "تسوّق معدات الصيد والتخييم والرحلات مع طلب مباشر عبر واتساب والدفع عند الاستلام.",
    shopNow: "تسوّق الآن",
    contactWhatsapp: "تواصل عبر واتساب",
    cashTitle: "الدفع عند الاستلام",
    cashText: "ادفع عند وصول طلبك.",
    supportTitle: "دعم عبر واتساب",
    supportText: "تواصل مباشر قبل الطلب وبعده.",
    locationTitle: "موقع المتجر",
    locationText: "افتح موقعنا مباشرة على خرائط Google.",
    catalogue: "المنتجات",
    productsTitle: "منتجاتنا",
    searchPlaceholder: "ابحث عن منتج",
    allCategories: "كل الفئات",
    emptyProducts: "لا توجد منتجات مطابقة.",
    aboutEyebrow: "من نحن",
    aboutTitle: "Syoufi Hunting",
    aboutText: "متجر متخصص بمعدات الصيد والرحلات والتخييم والمغامرات، مع خدمة مباشرة ومنتجات مختارة بعناية.",
    askProduct: "استفسر عن منتج",
    contactEyebrow: "تواصل",
    contactTitle: "زر أو تواصل مع Syoufi Hunting",
    contactText: "اتصل بنا أو افتح موقع المتجر على خرائط Google.",
    openMaps: "فتح خرائط Google",
    yourCart: "سلة الشراء",
    total: "المجموع",
    checkout: "إتمام الطلب",
    checkoutTitle: "إتمام الطلب",
    checkoutText: "طريقة الدفع: عند الاستلام.",
    fullName: "الاسم الكامل",
    phone: "رقم الهاتف",
    area: "المدينة / المنطقة",
    address: "عنوان التوصيل",
    notes: "ملاحظات",
    sendOrder: "إرسال الطلب عبر واتساب",
    add: "أضف",
    inquiry: "استفسر عبر واتساب",
    outOfStock: "غير متوفر",
    featured: "مميز",
    remove: "حذف",
    emptyCart: "السلة فارغة.",
    added: "تمت الإضافة إلى السلة.",
    addProductsFirst: "أضف منتجات قبل إتمام الطلب.",
    orderOpening: "سيتم فتح واتساب..."
  }
};

let currentLanguage =
  localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";

let cart =
  JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");

let activeProducts =
  PRODUCTS.filter((product) => product.active);

const languageButton =
  document.getElementById("languageButton");

const productGrid =
  document.getElementById("productGrid");

const categoryFilter =
  document.getElementById("categoryFilter");

const searchInput =
  document.getElementById("searchInput");

const emptyMessage =
  document.getElementById("emptyMessage");

const cartDrawer =
  document.getElementById("cartDrawer");

const cartItems =
  document.getElementById("cartItems");

const cartCount =
  document.getElementById("cartCount");

const cartTotal =
  document.getElementById("cartTotal");

const checkoutModal =
  document.getElementById("checkoutModal");

const checkoutForm =
  document.getElementById("checkoutForm");

function translate(key) {
  return translations[currentLanguage][key] || key;
}

function applyLanguage() {
  const isArabic = currentLanguage === "ar";

  document.documentElement.lang =
    currentLanguage;

  document.documentElement.dir =
    isArabic ? "rtl" : "ltr";

  languageButton.textContent =
    isArabic ? "English" : "العربية";

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = translate(key);
    });

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      element.placeholder = translate(key);
    });

  renderCategories();
  filterProducts();
  renderCart();
}

function getProductName(product) {
  return currentLanguage === "ar"
    ? product.nameAr
    : product.nameEn;
}

function getProductDescription(product) {
  return currentLanguage === "ar"
    ? product.descriptionAr
    : product.descriptionEn;
}

function getProductCategory(product) {
  return currentLanguage === "ar"
    ? product.categoryAr
    : product.categoryEn;
}

function formatPrice(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

function renderCategories() {
  const currentValue = categoryFilter.value;

  const categories = [
    ...new Set(
      activeProducts
        .map(getProductCategory)
        .filter(Boolean)
    )
  ].sort();

  categoryFilter.innerHTML = `
    <option value="">
      ${translate("allCategories")}
    </option>
  `;

  categories.forEach((category) => {
    const option =
      document.createElement("option");

    option.value = category;
    option.textContent = category;

    categoryFilter.appendChild(option);
  });

  if (categories.includes(currentValue)) {
    categoryFilter.value = currentValue;
  }
}

function filterProducts() {
  const query =
    searchInput.value.trim().toLowerCase();

  const selectedCategory =
    categoryFilter.value;

  const filtered = activeProducts.filter(
    (product) => {
      const name =
        getProductName(product).toLowerCase();

      const description =
        getProductDescription(product).toLowerCase();

      const category =
        getProductCategory(product);

      const matchesSearch =
        !query ||
        name.includes(query) ||
        description.includes(query);

      const matchesCategory =
        !selectedCategory ||
        category === selectedCategory;

      return matchesSearch && matchesCategory;
    }
  );

  renderProducts(filtered);
}

function renderProducts(products) {
  emptyMessage.classList.toggle(
    "hidden",
    products.length !== 0
  );

  productGrid.innerHTML =
    products.map((product) => {
      const imageMarkup =
        product.image
          ? `
            <img
              src="${escapeHtml(product.image)}"
              alt="${escapeHtml(getProductName(product))}"
              loading="lazy"
            >
          `
          : `
            <div class="product-placeholder">
              SYOUFI HUNTING
            </div>
          `;

      const featuredMarkup =
        product.featured
          ? `
            <span class="product-badge">
              ${translate("featured")}
            </span>
          `
          : "";

      const oldPriceMarkup =
        product.oldPrice
          ? `
            <span class="old-price">
              ${formatPrice(product.oldPrice)}
            </span>
          `
          : "";

      const buttonText =
        product.inquiryOnly
          ? translate("inquiry")
          : product.inStock
            ? translate("add")
            : translate("outOfStock");

      const disabled =
        !product.inStock &&
        !product.inquiryOnly;

      return `
        <article class="product-card">

          <div class="product-image">
            ${imageMarkup}
            ${featuredMarkup}
          </div>

          <div class="product-content">
            <span class="product-category">
              ${escapeHtml(getProductCategory(product))}
            </span>

            <h3>
              ${escapeHtml(getProductName(product))}
            </h3>

            <p>
              ${escapeHtml(getProductDescription(product))}
            </p>

            <div class="product-footer">
              <div>
                ${
                  product.inquiryOnly
                    ? ""
                    : `
                      <span class="product-price">
                        ${formatPrice(product.price)}
                      </span>
                      ${oldPriceMarkup}
                    `
                }
              </div>

              <button
                class="add-button"
                type="button"
                data-product-id="${product.id}"
                ${disabled ? "disabled" : ""}
              >
                ${buttonText}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

  document
    .querySelectorAll("[data-product-id]")
    .forEach((button) => {
      button.addEventListener(
        "click",
        handleProductButton
      );
    });
}

function handleProductButton(event) {
  const productId =
    Number(event.currentTarget.dataset.productId);

  const product =
    activeProducts.find(
      (item) => item.id === productId
    );

  if (!product) {
    return;
  }

  if (product.inquiryOnly) {
    openProductInquiry(product);
    return;
  }

  addToCart(product);
}

function addToCart(product) {
  const existingItem =
    cart.find(
      (item) => item.id === product.id
    );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      nameAr: product.nameAr,
      nameEn: product.nameEn,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  showToast(translate("added"));
}

function saveCart() {
  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify(cart)
  );

  renderCart();
}

function renderCart() {
  const itemCount =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  cartCount.textContent =
    itemCount;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p class="muted-text">
        ${translate("emptyCart")}
      </p>
    `;
  } else {
    cartItems.innerHTML =
      cart.map((item) => {
        const itemName =
          currentLanguage === "ar"
            ? item.nameAr
            : item.nameEn;

        const imageMarkup =
          item.image
            ? `
              <img
                src="${escapeHtml(item.image)}"
                alt=""
              >
            `
            : `
              <div class="cart-item-placeholder">
                SH
              </div>
            `;

        return `
          <article class="cart-item">
            ${imageMarkup}

            <div>
              <strong>
                ${escapeHtml(itemName)}
              </strong>

              <span>
                ${formatPrice(item.price)}
              </span>

              <div class="quantity-control">
                <button
                  type="button"
                  data-cart-action="minus"
                  data-cart-id="${item.id}"
                >
                  −
                </button>

                <span>
                  ${item.quantity}
                </span>

                <button
                  type="button"
                  data-cart-action="plus"
                  data-cart-id="${item.id}"
                >
                  +
                </button>
              </div>
            </div>

            <button
              class="remove-button"
              type="button"
              data-cart-action="remove"
              data-cart-id="${item.id}"
            >
              ${translate("remove")}
            </button>
          </article>
        `;
      }).join("");
  }

  const total =
    cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );

  cartTotal.textContent =
    formatPrice(total);

  document
    .querySelectorAll("[data-cart-action]")
    .forEach((button) => {
      button.addEventListener(
        "click",
        handleCartAction
      );
    });
}

function handleCartAction(event) {
  const action =
    event.currentTarget.dataset.cartAction;

  const itemId =
    Number(event.currentTarget.dataset.cartId);

  const item =
    cart.find(
      (cartItem) => cartItem.id === itemId
    );

  if (!item) {
    return;
  }

  if (action === "plus") {
    item.quantity += 1;
  }

  if (action === "minus") {
    item.quantity -= 1;
  }

  if (
    action === "remove" ||
    item.quantity <= 0
  ) {
    cart =
      cart.filter(
        (cartItem) =>
          cartItem.id !== itemId
      );
  }

  saveCart();
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("cart-open");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove("cart-open");
}

function openProductInquiry(product) {
  const message =
    currentLanguage === "ar"
      ? `مرحباً، أريد الاستفسار عن المنتج: ${product.nameAr}`
      : `Hello, I would like to ask about: ${product.nameEn}`;

  openWhatsApp(message);
}

function openWhatsApp(message) {
  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(
    url,
    "_blank",
    "noopener"
  );
}

function showToast(message) {
  const toast =
    document.getElementById("toast");

  toast.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer =
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

languageButton.addEventListener(
  "click",
  () => {
    currentLanguage =
      currentLanguage === "en"
        ? "ar"
        : "en";

    localStorage.setItem(
      LANGUAGE_STORAGE_KEY,
      currentLanguage
    );

    applyLanguage();
  }
);

searchInput.addEventListener(
  "input",
  filterProducts
);

categoryFilter.addEventListener(
  "change",
  filterProducts
);

document
  .getElementById("openCartButton")
  .addEventListener(
    "click",
    openCart
  );

document
  .getElementById("closeCartButton")
  .addEventListener(
    "click",
    closeCart
  );

document
  .getElementById("checkoutButton")
  .addEventListener(
    "click",
    () => {
      if (cart.length === 0) {
        showToast(
          translate("addProductsFirst")
        );

        return;
      }

      checkoutModal.classList.remove(
        "hidden"
      );
    }
  );

document
  .getElementById("closeCheckoutButton")
  .addEventListener(
    "click",
    () => {
      checkoutModal.classList.add(
        "hidden"
      );
    }
  );

checkoutModal.addEventListener(
  "click",
  (event) => {
    if (event.target === checkoutModal) {
      checkoutModal.classList.add(
        "hidden"
      );
    }
  }
);

checkoutForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    const formData =
      new FormData(event.currentTarget);

    const customer =
      Object.fromEntries(
        formData.entries()
      );

    const orderLines =
      cart.map((item) => {
        const itemName =
          currentLanguage === "ar"
            ? item.nameAr
            : item.nameEn;

        const itemTotal =
          item.price * item.quantity;

        return `• ${itemName} × ${item.quantity} = ${formatPrice(itemTotal)}`;
      });

    const total =
      cart.reduce(
        (sum, item) =>
          sum + item.price * item.quantity,
        0
      );

    const message =
      currentLanguage === "ar"
        ? `طلب جديد من موقع Syoufi Hunting

الاسم: ${customer.fullName}
الهاتف: ${customer.phone}
المنطقة: ${customer.area}
العنوان: ${customer.address}
الملاحظات: ${customer.notes || "-"}

المنتجات:
${orderLines.join("\n")}

المجموع: ${formatPrice(total)}
طريقة الدفع: عند الاستلام`
        : `New order from Syoufi Hunting website

Name: ${customer.fullName}
Phone: ${customer.phone}
Area: ${customer.area}
Address: ${customer.address}
Notes: ${customer.notes || "-"}

Products:
${orderLines.join("\n")}

Total: ${formatPrice(total)}
Payment: Cash on delivery`;

    showToast(
      translate("orderOpening")
    );

    cart = [];
    saveCart();

    event.currentTarget.reset();

    checkoutModal.classList.add(
      "hidden"
    );

    closeCart();

    setTimeout(
      () => openWhatsApp(message),
      400
    );
  }
);

const menuButton =
  document.getElementById("menuButton");

const mainNav =
  document.getElementById("mainNav");

menuButton.addEventListener(
  "click",
  () => {
    const isOpen =
      mainNav.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  }
);

mainNav
  .querySelectorAll("a")
  .forEach((link) => {
    link.addEventListener(
      "click",
      () => {
        mainNav.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );
      }
    );
  });

document.getElementById("year").textContent =
  new Date().getFullYear();

applyLanguage();
