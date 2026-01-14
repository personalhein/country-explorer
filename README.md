# 🌏 Country Explorer

**Country Explorer** သည် ကမ္ဘာ့နိုင်ငံများ၏ အချက်အလက်များကို [RestCountries API](https://restcountries.com/) မှတဆင့် Real-time လှမ်းယူပြီး (Fetch)၊ အသုံးပြုသူများ လွယ်ကူစွာ ရှာဖွေကြည့်ရှုနိုင်ရန် ဖန်တီးထားသော Web Application တစ်ခုဖြစ်ပါတယ်။

## 📋 ပါဝင်သော လုပ်ဆောင်ချက်များ (Features)

* **Data Fetching:** API မှ နိုင်ငံပေါင်းစုံ၏ အချက်အလက်များ (အလံ၊ လူဦးရေ၊ တည်နေရာ) ကို အလိုအလျောက် ဆွဲယူပြသပေးခြင်း။
* **Search Functionality:** နိုင်ငံအမည်ရိုက်ထည့်လိုက်တာနှင့် တပြိုင်နက် ရှာဖွေပေးနိုင်ခြင်း (Filter Logic)။
* **Responsive Design:** CSS Grid ကိုအသုံးပြုထား၍ Mobile, Tablet နှင့် Desktop များတွင် အဆင်ပြေစွာ ကြည့်ရှုနိုင်ခြင်း။
* **Loading State:** Data မရောက်လာခင်တွင် CSS Animation ဖြင့် ပြုလုပ်ထားသော Loader ကို ပြသပေးခြင်း။
* **Error Handling:** API Error သို့မဟုတ် Connection ပြဿနာရှိပါက User ကို အသိပေးစာသား ထုတ်ပြပေးခြင်း။

## 📂 ဖိုင်ဖွဲ့စည်းပုံ (File Structure)

Project တွင် အဓိကဖိုင် (၃) ဖိုင် ပါဝင်သည်-

1.  `index.html` - Web Application ၏ အဓိက အရိုးစု (Structure)။
2.  `style.css` - ဒီဇိုင်း၊ Layout နှင့် Animation များ။
3.  `script.js` - Data Fetching နှင့် Search Logic များ။

## 🛠️ နည်းပညာပိုင်းဆိုင်ရာ ရှင်းလင်းချက် (Technical Overview)

### HTML (`index.html`)
* Search Input, Loader, Grid Container နှင့် Error Message များကို ID သတ်မှတ်ပြီး တည်ဆောက်ထားသည်။
* Semantics tags များနှင့် Accessibility အတွက် လိုအပ်သော Structure များ ပါဝင်သည်။

### CSS (`style.css`)
* **Grid System:** `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));` ကိုသုံးထား၍ Screen size အလိုက် Column အရေအတွက်ကို အလိုအလျောက် ညှိပေးသည်။
* **Animations:** Loader အတွက် `@keyframes spin` ကို အသုံးပြုထားသည်။
* **Interactivity:** Card များကို Hover လုပ်ပါက အပေါ်သို့ အနည်းငယ်ကြွတက်သွားမည့် Effect (`transform: translateY`) ပါဝင်သည်။
* **Mobile Support:** `@media (max-width: 600px)` ဖြင့် ဖုန်း Screen များအတွက် သီးသန့် Style များ ရေးသားထားသည်။

### JavaScript (`script.js`)
* **Async/Await:** `fetchCountries()` function တွင် Data များကို Asynchronous နည်းစနစ်ဖြင့် လှမ်းယူထားသည်။
* **DOM Manipulation:** ရရှိလာသော Data များကို `map()` method သုံး၍ HTML Element များအဖြစ် ပြောင်းလဲကာ UI တွင် ပြသသည်။
* **Event Listeners:** `input` event ကို နားထောင်ပြီး Search box တွင် စာရိုက်လိုက်တိုင်း `filter()` method ဖြင့် ရလဒ်များကို ချက်ချင်း ပြောင်းလဲပြသသည်။

## 🚀 စတင်အသုံးပြုပုံ (How to Run)

1.  `index.html`, `style.css`, `script.js` ဖိုင် (၃) ခုလုံးကို Folder တစ်ခုတည်းတွင် ထားရှိပါ။
2.  အင်တာနက် ဖွင့်ထားပါ။ (API မှ Data ယူရန် လိုအပ်ပါသည်)။
3.  `index.html` ကို Browser (Chrome, Firefox, etc.) ဖြင့် ဖွင့်ပါ။

## 🔗 API Reference

ဒီ Project မှာ အောက်ပါ Public API ကို အသုံးပြုထားပါတယ်-

* **Source:** [REST Countries v3.1](https://restcountries.com/)
* **Endpoint:** `https://restcountries.com/v3.1/all`
* **Parameters:** `fields=name,flags,population,region,maps`

---
*Created for educational purposes.*