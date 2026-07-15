/* Gruplu açılır menü — aktif işaretleme + mobil/masaüstü açılır davranış */
(function () {
  function kur() {
    const yol = location.pathname.split("/").pop() || "index.html";
    const menu = document.getElementById("anaMenu");
    if (!menu) return;

    // Aktif bağlantıyı ve grubunu işaretle
    menu.querySelectorAll("a[data-sayfa]").forEach(a => {
      if (a.getAttribute("data-sayfa") === yol) {
        a.classList.add("aktif");
        const grup = a.closest(".grup");
        if (grup) grup.classList.add("aktif-grup");
      }
    });

    // Mobil: hamburger menüyü aç/kapat
    const acDugme = document.getElementById("menuAc");
    if (acDugme) acDugme.addEventListener("click", () => menu.classList.toggle("acik"));

    // Grup başlıklarına tıkla: alt menüyü aç/kapat (hem mobil hem masaüstü)
    menu.querySelectorAll(".grup-baslik").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const grup = btn.closest(".grup");
        const zatenAcik = grup.classList.contains("acik");
        menu.querySelectorAll(".grup.acik").forEach(g => g.classList.remove("acik"));
        if (!zatenAcik) grup.classList.add("acik");
      });
    });

    // Dışarı tıklayınca kapat
    document.addEventListener("click", e => {
      if (!menu.contains(e.target) && (!acDugme || !acDugme.contains(e.target))) {
        menu.querySelectorAll(".grup.acik").forEach(g => g.classList.remove("acik"));
      }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", kur);
  else kur();
})();
