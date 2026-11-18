const rooms = [
  {
    id: "haram-royal",
    name: "الجناح الملكي بإطلالة الحرم",
    shortName: "الجناح الملكي",
    view: "إطلالة مباشرة على المسجد الحرام",
    price: 2450,
    rating: 4.9,
    reviewCount: 128,
    area: 92,
    guests: 4,
    beds: "سرير ملكي وسرير أريكة",
    shortDescription: "رحابة ملكية وإطلالة آسرة على الحرم، في تفاصيل تمنحكم طمأنينة لا تُنسى.",
    description: "استيقظوا على مشهد يفيض بالسكينة في جناح صُمم ليكون ملاذكم الخاص. تمتد النوافذ البانورامية لتفتح الإطلالة على المسجد الحرام، فيما تجمع منطقة الجلوس الهادئة والمواد الطبيعية والألوان الدافئة بين فخامة الضيافة المكية وراحة المنزل. مساحة رحبة وخدمات مدروسة تجعل كل لحظة من إقامتكم أقرب إلى القلب.",
    features: ["إطلالة على المسجد الحرام", "نافذة بانورامية", "سرير ملكي", "منطقة جلوس", "تكييف مركزي", "إنترنت لاسلكي", "حمام فاخر", "خدمة الغرف"],
    images: [
      { src: "2 Image.jpeg", alt: "جناح فاخر بإطلالة على الكعبة المشرفة من نافذة واسعة", caption: "إطلالة الحرم من جناحكم" },
      { src: "WhatsApp Image 2026-11-17 at 3.40.19 PM (1).jpeg", alt: "جلسة أنيقة وواسعة بإطلالة على مكة", caption: "جلسة رحبة للأوقات الهادئة" },
      { src: "WhatsApp Image 2026-11-17 at 3.40.19 PM (2).jpeg", alt: "ضيافة صباحية بجوار نافذة تطل على المسجد الحرام", caption: "ضيافة صباحية بإطلالة الحرم" }
    ],
    reviews: [
      { name: "نموذج تجريبي · سارة", rating: 5, date: "تعليق نموذجي", text: "الإطلالة مميزة جداً، والجناح واسع بتفاصيل مريحة. نعرض هذا التعليق كنموذج تجريبي." },
      { name: "نموذج تجريبي · خالد", rating: 5, date: "تعليق نموذجي", text: "أحببنا هدوء منطقة الجلوس وسهولة الاسترخاء بعد يوم طويل. هذا التقييم تجريبي." }
    ]
  },
  {
    id: "panorama-suite",
    name: "جناح بانوراما مكة",
    shortName: "جناح بانوراما مكة",
    view: "إطلالة بانورامية على مدينة مكة",
    price: 1980,
    rating: 4.8,
    reviewCount: 96,
    area: 78,
    guests: 3,
    beds: "سرير ملكي وسرير مفرد",
    shortDescription: "أفق مكة يرافق صباحكم، ومساحة معاصرة صُممت لتجمع أحبّاءكم.",
    description: "في جناح بانوراما مكة، تتحول المدينة إلى لوحة واسعة ترافق لحظاتكم من الصباح حتى المساء. تمنحكم النوافذ الممتدة إحساساً بالاتساع، بينما ترحب بكم ألوان الجناح الهادئة ومفروشاته العصرية بمساحة تجمع الخصوصية والدفء. اختيار مثالي لمن يقدّر المشهد الجميل والراحة المتوازنة.",
    features: ["إطلالة بانورامية على مكة", "نوافذ ممتدة", "سرير ملكي", "جلسة عصرية", "تكييف مركزي", "إنترنت لاسلكي", "حمام بتشطيبات فاخرة", "خدمة الغرف"],
    images: [
      { src: "WhatsApp Image 2026-11-17 at 3.40.19 PM (1).jpeg", alt: "جلسة بانورامية واسعة بإطلالة مكية", caption: "إطلالة مكة من الجناح" },
      { src: "WhatsApp Image 2026-11-17 at 3.32.34 PM.jpeg", alt: "جلسة تطل على مآذن الحرم المكي من نافذة بانورامية", caption: "مشهد الحرم من الجلسة" },
      { src: "WhatsApp Image 2026-11-17 at 3.40.19 PM (2).jpeg", alt: "ضيافة صباحية بجوار نافذة تطل على المسجد الحرام", caption: "ضيافة صباحية بإطلالة الحرم" }
    ],
    reviews: [
      { name: "نموذج تجريبي · ريم", rating: 5, date: "تعليق نموذجي", text: "النوافذ تمنح المكان إحساساً رائعاً بالاتساع، والتصميم هادئ وأنيق. هذا تعليق للعرض فقط." },
      { name: "نموذج تجريبي · فهد", rating: 4, date: "تعليق نموذجي", text: "جناح جميل ومريح للعائلة الصغيرة، مع تفاصيل عصرية. التقييم تجريبي." }
    ]
  },
  {
    id: "family-garden",
    name: "جناح العائلة الفسيح",
    shortName: "جناح العائلة",
    view: "إطلالة هادئة على المدينة",
    price: 1750,
    rating: 4.7,
    reviewCount: 84,
    area: 105,
    guests: 6,
    beds: "سرير ملكي وسريران مفردان",
    shortDescription: "مساحة تجمع العائلة على راحتها، بخصوصية مدروسة وأركان لكل الأوقات.",
    description: "صُمم جناح العائلة الفسيح ليمنح كل فرد مساحة يستمتع بها، مع غرفة نوم مريحة ومنطقة جلوس تتسع للّقاءات الصغيرة. توازن الألوان المطمئنة والتخطيط العملي بين لحظات الهدوء ودفء الاجتماع، وتضمن التفاصيل المدروسة إقامة أكثر سلاسة وراحة للعائلات.",
    features: ["إطلالة هادئة على المدينة", "مساحة عائلية رحبة", "سرير ملكي", "منطقة جلوس منفصلة", "تكييف مركزي", "إنترنت لاسلكي", "حمام واسع", "خدمة الغرف"],
    images: [
      { src: "WhatsApp Image 2026-11-17 at 3.40.19 PM (3).jpeg", alt: "أسرة تجتمع في جلسة عائلية واسعة بإطلالة على مكة", caption: "مساحة تجمع العائلة" },
      { src: "WhatsApp Image 2026-11-17 at 3.40.19 PM (1).jpeg", alt: "منطقة جلوس واسعة مناسبة لاجتماع العائلة", caption: "جلسة عائلية رحبة" },
      { src: "WhatsApp Image 2026-11-17 at 3.40.19 PM (2).jpeg", alt: "ضيافة صباحية للعائلة بإطلالة على الحرم المكي", caption: "ضيافة تجمع الأحبة" }
    ],
    reviews: [
      { name: "نموذج تجريبي · منى", rating: 5, date: "تعليق نموذجي", text: "المساحة مناسبة جداً للعائلة ومنطقة الجلوس أضافت راحة لإقامتنا. نموذج تجريبي." },
      { name: "نموذج تجريبي · عبدالله", rating: 4, date: "تعليق نموذجي", text: "توزيع الغرف عملي وأعجبنا الهدوء في الجناح. التعليق للتوضيح وليس رأياً حقيقياً." }
    ]
  }
];

const getRoom = id => rooms.find(room => room.id === id) || rooms[0];
const formatNumber = value => new Intl.NumberFormat(document.documentElement.lang === "en" ? "en-US" : "ar-SA").format(value);
const stars = rating => `<span class="stars" aria-label="التقييم ${rating} من 5">${"★".repeat(Math.round(rating))}${"☆".repeat(5 - Math.round(rating))}</span>`;
const priceText = value => `${formatNumber(value)} <span class="currency">${document.documentElement.lang === "en" ? "SAR" : "ر.س"}</span>`;

function setFooterYear() {
  document.querySelectorAll("[data-year]").forEach(node => { node.textContent = new Date().getFullYear(); });
}

function renderRooms() {
  const list = document.getElementById("room-list");
  if (!list) return;
  list.innerHTML = rooms.map((room, index) => `
    <article class="room-card">
      <a class="room-card-image" href="room.html?id=${encodeURIComponent(room.id)}" aria-label="تفاصيل ${room.name}">
        <img src="${room.images[0].src}" alt="${room.images[0].alt}" loading="${index ? "lazy" : "eager"}">
        <span class="image-label">${room.view}</span>
        <span class="image-number">0${index + 1} <i>/ 0${rooms.length}</i></span>
      </a>
      <div class="room-card-body">
        <div class="room-card-title-row"><h3>${room.name}</h3><div class="card-rating">${stars(room.rating)} <span>${room.rating}</span></div></div>
        <p class="room-card-description">${room.shortDescription}</p>
        <div class="room-card-meta"><span><span aria-hidden="true">♧</span> حتى ${room.guests} أشخاص</span><span><span aria-hidden="true">◇</span> ${room.area} م²</span></div>
        <div class="room-card-bottom"><div class="card-price">${priceText(room.price)}<small>لليلة الواحدة</small></div><div class="card-actions"><a class="text-link" href="room.html?id=${encodeURIComponent(room.id)}">تفاصيل أكثر <span aria-hidden="true">←</span></a><a class="button button-small button-dark" href="room.html?id=${encodeURIComponent(room.id)}#booking-panel">احجز الآن</a></div></div>
      </div>
    </article>`).join("");
}

function localDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateOffset(days) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return localDate(date);
}

function nightsBetween(checkin, checkout) {
  if (!checkin || !checkout) return 0;
  const start = new Date(`${checkin}T12:00:00`);
  const end = new Date(`${checkout}T12:00:00`);
  return Math.round((end - start) / 86400000);
}

function formatDate(value) {
  if (!value) return "—";
  const locale = document.documentElement.lang === "en" ? "en-US" : "ar-SA";
  return new Intl.DateTimeFormat(locale, { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${value}T12:00:00`));
}

function populateSelect(select, min, max, initial) {
  select.innerHTML = Array.from({ length: max - min + 1 }, (_, index) => {
    const value = min + index;
    return `<option value="${value}"${value === initial ? " selected" : ""}>${value}</option>`;
  }).join("");
}

function initRoom() {
  if (document.body.dataset.page !== "room") return;
  const params = new URLSearchParams(location.search);
  const room = getRoom(params.get("id"));
  const chosenRoom = params.get("id");
  if (!chosenRoom || !rooms.some(item => item.id === chosenRoom)) {
    history.replaceState(null, "", `room.html?id=${encodeURIComponent(room.id)}`);
  }
  document.title = `${room.name} | شيخة للضيافة والفخامة`;
  document.getElementById("room-title").textContent = room.name;
  document.getElementById("breadcrumb-room").textContent = room.shortName;
  document.getElementById("room-view").textContent = room.view;
  document.getElementById("detail-title").textContent = room.name;
  document.getElementById("room-description").textContent = room.description;
  document.getElementById("booking-price").innerHTML = priceText(room.price);
  document.getElementById("heading-rating").innerHTML = `${stars(room.rating)} <strong>${room.rating}</strong><span>(${formatNumber(room.reviewCount)} تقييم)</span>`;
  document.getElementById("detail-rating").innerHTML = `${stars(room.rating)} <strong>${room.rating}</strong><span>${formatNumber(room.reviewCount)} تقييم تجريبي</span>`;
  document.getElementById("room-specs").innerHTML = [
    ["المساحة", `${room.area} م²`], ["عدد الأشخاص", `${room.guests} أشخاص`], ["الأسرة", room.beds], ["نوع الإطلالة", room.view]
  ].map(([label, value]) => `<div class="spec-item"><span>${label}</span><strong>${value}</strong></div>`).join("");
  document.getElementById("feature-list").innerHTML = room.features.map((feature, index) => `<div class="feature-item"><span class="feature-icon" aria-hidden="true">${["⌖", "▧", "♧", "◇", "❋", "⌁", "◈", "◷"][index % 8]}</span><span>${feature}</span></div>`).join("");

  let currentImage = 0;
  let zoom = 1;
  const image = document.getElementById("gallery-image");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const dots = document.getElementById("gallery-dots");
  const thumbs = document.getElementById("gallery-thumbs");

  dots.innerHTML = room.images.map((_, index) => `<button type="button" class="gallery-dot${index === 0 ? " active" : ""}" data-index="${index}" aria-label="عرض الصورة ${index + 1} من ${room.images.length}" aria-pressed="${index === 0}"></button>`).join("");
  thumbs.innerHTML = room.images.map((item, index) => `<button type="button" class="gallery-thumb${index === 0 ? " active" : ""}" data-index="${index}" aria-label="عرض: ${item.caption}" aria-pressed="${index === 0}"><img src="${item.src}" alt="" loading="lazy"></button>`).join("");

  function showImage(index) {
    currentImage = (index + room.images.length) % room.images.length;
    const item = room.images[currentImage];
    image.src = item.src;
    image.alt = item.alt;
    document.getElementById("gallery-counter").textContent = `${currentImage + 1} / ${room.images.length}`;
    document.getElementById("caption-index").textContent = `0${currentImage + 1}`;
    document.getElementById("gallery-caption").textContent = item.caption;
    dots.querySelectorAll("button").forEach((button, i) => {
      button.classList.toggle("active", i === currentImage);
      button.setAttribute("aria-pressed", String(i === currentImage));
    });
    thumbs.querySelectorAll("button").forEach((button, i) => {
      button.classList.toggle("active", i === currentImage);
      button.setAttribute("aria-pressed", String(i === currentImage));
    });
    image.classList.remove("gallery-image-enter");
    void image.offsetWidth;
    image.classList.add("gallery-image-enter");
    if (lightbox.open) {
      lightboxImage.src = item.src;
      lightboxImage.alt = item.alt;
      document.getElementById("lightbox-caption").textContent = item.caption;
      document.getElementById("lightbox-counter").textContent = `${currentImage + 1} / ${room.images.length}`;
      lightboxImage.style.transform = "scale(1)";
      zoom = 1;
    }
  }
  const step = direction => showImage(currentImage + direction);
  document.querySelector(".gallery-next").addEventListener("click", () => step(1));
  document.querySelector(".gallery-prev").addEventListener("click", () => step(-1));
  dots.addEventListener("click", event => { const button = event.target.closest("[data-index]"); if (button) showImage(Number(button.dataset.index)); });
  thumbs.addEventListener("click", event => { const button = event.target.closest("[data-index]"); if (button) showImage(Number(button.dataset.index)); });

  document.querySelector(".gallery-fullscreen").addEventListener("click", () => {
    showImage(currentImage);
    lightbox.showModal();
  });
  document.querySelector(".lightbox-next").addEventListener("click", () => step(1));
  document.querySelector(".lightbox-prev").addEventListener("click", () => step(-1));
  document.getElementById("lightbox-close").addEventListener("click", () => lightbox.close());
  document.getElementById("zoom-in").addEventListener("click", () => { zoom = Math.min(zoom + 0.25, 2.5); lightboxImage.style.transform = `scale(${zoom})`; });
  document.getElementById("zoom-out").addEventListener("click", () => { zoom = Math.max(zoom - 0.25, 1); lightboxImage.style.transform = `scale(${zoom})`; });
  lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
  document.addEventListener("keydown", event => {
    if (!lightbox.open) return;
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  });

  let touchStartX = null;
  const gallery = document.getElementById("gallery-main");
  gallery.addEventListener("touchstart", event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  gallery.addEventListener("touchend", event => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 45) step(delta < 0 ? 1 : -1);
    touchStartX = null;
  }, { passive: true });
  showImage(0);

  const reviewList = document.getElementById("review-list");
  const reviewSummary = document.getElementById("reviews-summary");
  const userReviews = [];
  function renderReviews() {
    const average = userReviews.length
      ? (room.rating * room.reviewCount + userReviews.reduce((sum, review) => sum + review.rating, 0)) / (room.reviewCount + userReviews.length)
      : room.rating;
    reviewSummary.innerHTML = `<span class="review-summary-score">${average.toFixed(1)}</span><span>${stars(average)}<small>${formatNumber(room.reviewCount + userReviews.length)} تقييم</small></span>`;
    document.getElementById("detail-rating").innerHTML = `${stars(average)} <strong>${average.toFixed(1)}</strong><span>${formatNumber(room.reviewCount + userReviews.length)} تقييم</span>`;
    const reviews = [...userReviews.slice().reverse(), ...room.reviews];
    reviewList.innerHTML = reviews.map(review => `<article class="review-card"><div class="review-card-top"><span class="review-avatar" aria-hidden="true">${review.name.trim().charAt(0)}</span><div><strong>${escapeHTML(review.name)}</strong><small>${escapeHTML(review.date)}</small></div><span class="review-stars" aria-label="${review.rating} من 5">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span></div><p>${escapeHTML(review.text)}</p>${review.sample ? '<span class="sample-tag">تقييم زائر</span>' : '<span class="sample-tag">نموذج تجريبي</span>'}</article>`).join("");
  }
  document.getElementById("review-form").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    userReviews.push({ name: String(data.get("name")).trim(), rating: Number(data.get("rating")), text: String(data.get("comment")).trim(), date: "تمت إضافته الآن", sample: true });
    renderReviews();
    form.reset();
    document.getElementById("review-status").textContent = "تمت إضافة تقييمك إلى قائمة العرض لهذه الزيارة.";
  });
  renderReviews();
  document.addEventListener("site-language-change", renderReviews);

  const bookingForm = document.getElementById("room-booking-form");
  const checkin = bookingForm.elements.checkin;
  const checkout = bookingForm.elements.checkout;
  checkin.min = dateOffset(0);
  checkin.value = params.get("checkin") || dateOffset(1);
  checkout.min = dateOffset(1);
  checkout.value = params.get("checkout") || dateOffset(2);
  populateSelect(bookingForm.elements.guests, 1, room.guests, Math.min(Number(params.get("guests")) || 2, room.guests));
  populateSelect(bookingForm.elements.rooms, 1, 5, Math.max(1, Number(params.get("rooms")) || 1));
  function updateBookingTotal() {
    const minimumCheckout = localDate(new Date(new Date(`${checkin.value}T12:00:00`).getTime() + 86400000));
    checkout.min = minimumCheckout;
    if (checkout.value <= checkin.value) checkout.value = minimumCheckout;
    const nights = nightsBetween(checkin.value, checkout.value);
    const subtotal = nights * room.price * Number(bookingForm.elements.rooms.value || 1);
    const tax = subtotal * 0.15;
    const total = subtotal + tax;
    document.getElementById("stay-nights").textContent = `· ${nights} ${nights === 1 ? "ليلة" : "ليالٍ"}`;
    document.getElementById("stay-subtotal").innerHTML = priceText(subtotal);
    document.getElementById("stay-tax").innerHTML = priceText(tax);
    document.getElementById("stay-total").innerHTML = priceText(total);
  }
  bookingForm.addEventListener("change", updateBookingTotal);
  checkin.addEventListener("change", updateBookingTotal);
  document.addEventListener("site-language-change", updateBookingTotal);
  updateBookingTotal();
  bookingForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!bookingForm.reportValidity()) return;
    const query = new URLSearchParams({
      id: room.id, checkin: checkin.value, checkout: checkout.value,
      guests: bookingForm.elements.guests.value, rooms: bookingForm.elements.rooms.value
    });
    location.href = `booking.html?${query.toString()}`;
  });
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function initMobileNavigation() {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".main-nav");
  if (!header || !nav) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "menu-toggle";
  button.setAttribute("aria-label", "فتح قائمة التنقل");
  button.setAttribute("aria-expanded", "false");
  button.innerHTML = "<span></span><span></span><span></span>";
  header.insertBefore(button, nav);
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("nav-open", !open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    button.setAttribute("aria-expanded", "false");
    nav.classList.remove("nav-open");
  }));
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const status = document.getElementById("contact-status");
    status.textContent = "تم إرسال رسالتك تجريبياً بنجاح. هذه النسخة لا ترسل البيانات إلى خادم.";
    form.reset();
  });
}

function initCheckout() {
  if (document.body.dataset.page !== "booking") return;
  const params = new URLSearchParams(location.search);
  const room = getRoom(params.get("id"));
  const checkin = params.get("checkin") || dateOffset(1);
  const checkout = params.get("checkout") || dateOffset(2);
  const guests = Math.min(Math.max(1, Number(params.get("guests")) || 2), room.guests);
  const count = Math.min(Math.max(1, Number(params.get("rooms")) || 1), 5);
  const nights = Math.max(1, nightsBetween(checkin, checkout));
  document.title = `إكمال حجز ${room.shortName} | شيخة`;
  document.getElementById("checkout-room-name").textContent = room.name;
  document.getElementById("checkout-view").textContent = room.view;
  function renderCheckoutSummary() {
    document.getElementById("checkout-checkin").textContent = formatDate(checkin);
    document.getElementById("checkout-checkout").textContent = formatDate(checkout);
    document.getElementById("checkout-nights").textContent = document.documentElement.lang === "en"
      ? `${nights} ${nights === 1 ? "night" : "nights"}`
      : `${formatNumber(nights)} ${nights === 1 ? "ليلة" : "ليالٍ"}`;
    document.getElementById("checkout-guests").textContent = `${formatNumber(guests)} · ${formatNumber(count)}`;
    const subtotal = room.price * nights * count;
    const tax = subtotal * 0.15;
    document.getElementById("checkout-subtotal").innerHTML = priceText(subtotal);
    document.getElementById("checkout-tax").innerHTML = priceText(tax);
    document.getElementById("checkout-total").innerHTML = priceText(subtotal + tax);
  }
  renderCheckoutSummary();
  document.addEventListener("site-language-change", renderCheckoutSummary);
  document.getElementById("checkout-form").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    document.getElementById("checkout-status").textContent = "شكراً لكم! تم استلام طلب الحجز التجريبي بنجاح. لن يتم تحصيل أي مبلغ.";
    form.querySelector("button[type=submit]").disabled = true;
  });
}

setFooterYear();
initMobileNavigation();
initContactForm();
renderRooms();
initRoom();
initCheckout();
