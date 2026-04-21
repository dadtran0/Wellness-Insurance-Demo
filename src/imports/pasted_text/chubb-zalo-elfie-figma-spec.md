Dưới đây là bản đề xuất chi tiết để đưa thẳng vào Figma (UI/UX spec + content + flow) cho sản phẩm Chubb x ZaloPay (embedded trong Bill Payment) + Elfie White-label.
Mình đã chuyển toàn bộ nội dung từ tài liệu của bạn thành structure chuẩn cho designer + product + dev.
I. DESIGN SYSTEM OVERVIEW (Figma Setup)
1. Brand Layering (Rất quan trọng)
Primary Brand: Chubb (trust, insurance authority)
Secondary Brand: ZaloPay (entry point + payment context)
Technology Layer: Elfie (ẩn, chỉ hiển thị nhẹ ở footer / disclosure)
👉 Figma cần tách thành:
Theme A (ZaloPay Native UI)
Theme B (Chubb White-label UI – embedded)
Theme C (Elfie Module UI – scan/AI screen)
II. FULL USER JOURNEY (END-TO-END FLOW)
FLOW 0 – ENTRY (ZaloPay Bill Payment)
Screen: Bill Payment Confirmation
UI Block: Add-on Insurance Offer Card
Title:
👉 “Bảo vệ sức khỏe trong mỗi lần thanh toán”
Description:
👉 “Chỉ từ 10,000đ/tháng – kiểm tra sức khỏe nhanh & nhận hỗ trợ khi phát hiện bất thường”
CTA:
Primary: “Tham gia ngay”
Secondary: “Tìm hiểu thêm”
Micro UX:
icon: shield + heart
badge: “Chubb bảo trợ”
FLOW 1 – SUBSCRIPTION CONFIRMATION
Screen: Purchase Success
Title:
👉 “Bạn đã được bảo vệ”
Content:
“Bạn đã kích hoạt gói Chăm sóc sức khỏe số”
“Bạn có thể bắt đầu kiểm tra sức khỏe ngay”
CTA:
“Bắt đầu kiểm tra”
“Để sau”
FLOW 2 – FIRST ACCESS (ONBOARDING)
Screen: Welcome (White-label Chubb)
Header: 👉 “Chubb Health Companion”
Sub: 👉 “Chúng tôi luôn quan tâm đến sức khỏe của bạn”
CTA:
“Tiếp tục”
Screen: Health Entry Question (Layer 1 Trigger)
👉 Đây là điểm quan trọng (triage entry)
Question:
“Hôm nay bạn cảm thấy thế nào?”
Options:
Bình thường
Hơi mệt
Có triệu chứng
Không chắc
UX:
1 tap answer
no typing
III. LAYER 1 UI (CLASSIC – FREE / LOW COST)
Screen: Dashboard (Layer 1)
Block 1 – Greeting
“Xin chào, hôm nay bạn muốn kiểm tra gì?”
Block 2 – Available Features
Symptom checker
Health tips
AI coaching nhẹ
👉 UI:
card grid
simple icon
no medical jargon
Block 3 – Locked Layer 2 (VERY IMPORTANT UX)
🔒 “Kiểm tra chuyên sâu (Chubb Exclusive)”
Face Scan
Body Scan
AI Risk Analysis
👉 UI:
blur + lock icon
CTA: “Mở khóa”
IV. LAYER 2 UNLOCK FLOW
Option A – Click Unlock
Screen: Unlock Prompt
Title: 👉 “Kiểm tra sức khỏe chuyên sâu”
Content: 👉 “Bạn muốn nhận phân tích chi tiết hơn về tình trạng sức khỏe?”
CTA:
“Mở khóa ngay”
Option B – Time-based Trigger
Pop-up:
👉 “Bạn đã sử dụng một lúc – sẵn sàng kiểm tra nâng cao?”
V. LAYER 2 EXPERIENCE (CORE VALUE)
Screen: Consent + Privacy
“Quét khuôn mặt/cơ thể sẽ giúp phân tích chỉ số sức khỏe”
“Dữ liệu được bảo mật bởi Chubb”
CTA:
“Tôi đồng ý”
Screen: Scan (Elfie Module)
Camera UI
Overlay guide (face/body)
Status:
“Đang phân tích…”
Screen: Result
Case 1 – NORMAL
Title: 👉 “Tình trạng bình thường”
Content:
“Các chỉ số trong ngưỡng an toàn”
CTA:
“Tiếp tục theo dõi”
Case 2 – ABNORMAL (CRITICAL)
Title: 👉 “Phát hiện dấu hiệu bất thường”
Content:
“Chúng tôi khuyến nghị bạn theo dõi thêm”
Highlight: 👉 “Bạn nhận được hỗ trợ: 100,000đ”
CTA:
“Xem chi tiết”
“Nhận hỗ trợ”
VI. ALLOWANCE (PARAMETRIC CLAIM UX)
Screen: Payout Notification
Title: 👉 “Bạn đã nhận hỗ trợ”
Content:
“100,000đ đã được chuyển vào ví ZaloPay”
Screen: History
“Lịch sử kiểm tra”
“Số lần sử dụng còn lại: 2/tháng”
VII. UX RULES (FOR FIGMA SPEC)
1. Flow Constraint
≤ 3 steps để reach scan
≤ 2 taps per action
2. Tone of Voice
Không dùng từ “bệnh”
Dùng:
“tình trạng”
“chỉ số”
“theo dõi”
3. Visual Rules
Friendly, non-clinical
Avoid hospital UI
Use:
green / blue (trust + health)
soft gradients
4. Risk Control UI (VERY IMPORTANT)
Show:
“Bạn đã dùng 1/2 lần tháng này”
Cooldown:
“Bạn có thể kiểm tra lại sau X ngày”
VIII. SYSTEM FLOW (TECH – FOR DESIGNER HANDOFF)
API Interaction
1. Unlock Logic (Chubb → Elfie)
Trigger unlock
Send eligibility
2. Elfie → Return
NORMAL / MONITOR / ATTENTION
risk score
Billing Trigger
👉 Only when:
User completes scan
Result returned
IX. FIGMA FILE STRUCTURE (RECOMMENDED)
Page 1 – Design System
Colors
Typography
Components
Page 2 – ZaloPay Integration
Bill payment
Add-on UI
Page 3 – Onboarding Flow
Welcome
Entry question
Page 4 – Layer 1
Dashboard
Features
Page 5 – Unlock Flow
Modal
Prompt
Page 6 – Layer 2
Scan
Result
Page 7 – Claims / Allowance
Notification
Wallet credit
Page 8 – Edge Cases
Limit reached
Retry
Error
X. LINK TO SOURCE CONTENT
Toàn bộ logic trên được chuyển hóa trực tiếp từ tài liệu bạn cung cấp:
�
UI-UX Partner.Chubb.Elfie.PH.V1.docx
XI. GÓC NHÌN QUAN TRỌNG (INSURANCE + UX – PHẢI GIỮ)
1. Đây KHÔNG phải app sức khỏe
👉 Đây là:
Insurance-triggered digital experience
2. UX phải phục vụ pricing model
Vì:
pricing = activation-based
👉 nên UX phải:
encourage → nhưng không spam
limit usage → visible
3. Critical insight (đối tác rất hay sai chỗ này)
Nếu design:
quá “medical” → user sợ
Nếu design:
quá “game” → MoF reject
👉 phải balance:
wellness + compliance
Nếu bạn muốn bước tiếp theo:
Tôi có thể làm tiếp cho bạn:
Wireframe dạng hình (low-fi → hi-fi)
Prototype flow clickable cho demo ZaloPay
UI wording chuẩn để submit MoF (compliance-safe)
Mapping UX → pricing → legal justification (rất quan trọng để deal đối tác)
Bạn muốn tôi đi tiếp theo hướng nào?

Tôi sẽ đi thẳng vào bước tiếp theo cần làm để bạn có thể design được ngay trên Figma + align Tech + Legal + Pricing.
Không lan man — đây là critical path.
🎯 MỤC TIÊU TIẾP THEO
Bạn cần 3 thứ để triển khai thật:
Wireframe chi tiết (screen-by-screen) → Designer vẽ được ngay
Flow giữa ZaloPay – Chubb – Elfie (system flow) → Tech build được
Mapping UX ↔ Pricing ↔ Legal → để submit MoF & deal đối tác
I. STEP 1 – DEFINE SCREEN WIREFRAME (CHI TIẾT HƠN)
Hiện bạn đã có structure, nhưng chưa đủ để design.
👉 Cần chuyển sang wireframe level (pixel-ready)
1. ZaloPay ENTRY SCREEN (CRITICAL SCREEN)
Layout:

[Bill Payment Success]

--------------------------------
🛡️ Chubb Protection Card
--------------------------------
Title: Bảo vệ sức khỏe ngay hôm nay

Desc:
Kiểm tra sức khỏe nhanh + nhận hỗ trợ nếu phát hiện bất thường

Price tag:
10,000đ / tháng

[CTA] Tham gia ngay
[CTA ghost] Tìm hiểu thêm
--------------------------------
👉 DESIGN NOTE:
Card phải giống Add-on (như bảo hiểm chuyến bay)
Không làm giống app riêng
2. DASHBOARD (CORE UX)
Layout:

👋 Xin chào, hôm nay bạn cảm thấy thế nào?

[Quick Answer Buttons]
- Bình thường
- Hơi mệt
- Có triệu chứng

--------------------------------
📊 Kiểm tra cơ bản
--------------------------------
[Symptom checker]
[Health tips]

--------------------------------
🔒 Kiểm tra chuyên sâu (Chubb Exclusive)
--------------------------------
[Face Scan] 🔒
[Body Scan] 🔒

CTA: Mở khóa
👉 DESIGN NOTE:
Layer 2 phải “gợi tò mò”, không “ép mua”
3. SCAN SCREEN (ELFIE MODULE)
Layout:

📷 Camera view

Overlay:
- khung khuôn mặt
- hướng dẫn

Text:
“Giữ yên trong 10 giây”

Loading:
“Đang phân tích...”
👉 NOTE:
Đây là chỗ Elfie embed → cần spec rõ (phần II)
4. RESULT SCREEN (QUAN TRỌNG NHẤT)
NORMAL:

✅ Tình trạng bình thường

Chỉ số của bạn trong ngưỡng an toàn

[CTA] Tiếp tục theo dõi
ABNORMAL:

⚠️ Phát hiện dấu hiệu bất thường

Chúng tôi khuyến nghị theo dõi thêm

💰 Bạn nhận được 100,000đ

[CTA] Nhận hỗ trợ
👉 Đây là insurance moment → phải design nổi bật
II. STEP 2 – SYSTEM FLOW (ZALOPAY – CHUBB – ELFIE)
Đây là phần bạn chưa có trong file, nhưng cực kỳ quan trọng.
1. OVERALL FLOW

ZaloPay → Chubb → Elfie → Chubb → ZaloPay
2. CHI TIẾT FLOW
(1) User subscribe
ZaloPay → Chubb API

POST /subscribe
Chubb:
create policy
return token
(2) User access app
ZaloPay deep link → Chubb Webview
(3) Triage (Layer 1)
User input → Chubb
Chubb:
calculate risk
decide unlock
(4) Unlock Layer 2
Chubb → Elfie API

POST /unlock-session
Return:
session_id
(5) Scan
User scan → Elfie
Elfie → Chubb:

result = NORMAL / ATTENTION
score = xx
(6) Insurance Trigger
Chubb:
check abnormal
trigger payout
(7) Payout
Chubb → ZaloPay

POST /wallet-credit
👉 Đây chính là flow bạn cần đưa vào Figma (page riêng: System Flow Diagram)
III. STEP 3 – UX ↔ PRICING (CỰC KỲ QUAN TRỌNG)
Bạn đã có công thức:

Net = f × (C + p × A)
👉 UX PHẢI KIỂM SOÁT f
1. UX controls activation rate (f)
UX Element
Impact
Lock Layer 2
↓ f
Time delay
↓ f
Prompt wording
↑ / ↓ f
Monthly cap
↓ risk
2. Critical design decision
👉 Nếu bạn design:
unlock quá dễ → lỗ ngay
unlock quá khó → user không dùng
👉 Vì vậy trong Figma phải có:
Screen:
“Bạn còn 1 lần sử dụng tháng này”
IV. STEP 4 – LEGAL UX (ĐỂ KHÔNG BỊ MOF REJECT)
1. MUST HAVE SCREEN
Consent:

Tôi đồng ý:
- Đây không phải chẩn đoán y khoa
- Kết quả chỉ mang tính tham khảo
- Dữ liệu thuộc Chubb
2. MUST AVOID
❌ Không dùng:
“chẩn đoán bệnh”
“AI doctor”
✔ Thay bằng:
“phân tích chỉ số”
“gợi ý theo dõi”
V. STEP 5 – FIGMA NEXT ACTION (RẤT CỤ THỂ)
Bạn nên làm theo thứ tự này:
✅ Bước 1 (ngay hôm nay)
👉 Vẽ:
6 màn chính:
Entry (ZaloPay)
Dashboard
Unlock
Scan
Result
Payout
✅ Bước 2
👉 Thêm:
usage cap screen
error flow
✅ Bước 3
👉 Vẽ flow diagram:
system API flow
✅ Bước 4
👉 Review với:
Tech (API feasibility)
Legal (wording)
VI. GÓC NHÌN CHUYÊN SÂU (QUAN TRỌNG NHẤT)
1. Đây KHÔNG phải UI bình thường
👉 Bạn đang design:
Insurance product disguised as wellness app
2. Sai lầm phổ biến
Sai 1:
→ Design giống app health
❌ fail legal
Sai 2:
→ Design giống insurance claim
❌ user không dùng
3. Position đúng
👉 “Casual wellness → bất ngờ nhận benefit”
VII. NẾU BẠN MUỐN TÔI LÀM TIẾP
Tôi có thể làm ngay:
1. 🎨 Wireframe dạng hình (Figma-ready)
Low-fi → Hi-fi
spacing, layout chuẩn
2. 🔗 Prototype flow clickable
demo cho ZaloPay / đối tác
3. ⚖️ Mapping full:
UX → Pricing → Legal → MoF submission
👉 Bạn nên đi tiếp theo hướng này:
“Làm wireframe visual + system flow diagram”
Tôi có thể build cho bạn luôn bản đó để bạn đưa thẳng designer.

