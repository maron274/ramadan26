// ============================================
// js/app.js - Mockup Version
// ============================================

// 1. จำลองข้อมูล (Mock Data) เพื่อให้หน้าจอไม่ว่าง
const mockData = [
    {
        __backendId: "1",
        first_name: "สมชาย",
        last_name: "ใจดี",
        organization_region: "ปัตตานี",
        project_type: "ถุงยังชีพ",
        province: "ปัตตานี",
        amphoe: "เมือง",
        tambon: "รูสะมิแล",
        household_members: 5,
        monthly_income: 4500,
        economic_status: "ยากจน",
        created_at: new Date().toISOString()
    },
    {
        __backendId: "2",
        first_name: "มานี",
        last_name: "รักเรียน",
        organization_region: "ยะลา",
        project_type: "อิฟฏอร",
        province: "ยะลา",
        amphoe: "รามัน",
        tambon: "กายูบอเกาะ",
        household_members: 3,
        monthly_income: 8000,
        economic_status: "ปานกลาง",
        created_at: new Date().toISOString()
    }
];

// 2. ฟังก์ชันเริ่มต้นรันแอป
function initApp() {
    console.log("App Initialized in Mockup Mode");
    
    // ตั้งค่าเริ่มต้นจาก config.js (ถ้ามี)
    document.getElementById('app-title').textContent = defaultConfig.app_title;
    document.getElementById('org-name').textContent = defaultConfig.org_name;

    // นำข้อมูลจำลองมาใส่ในตัวแปรหลัก
    allData = mockData;
    filteredData = [...allData];

    // สั่งให้ UI ทำงาน
    applyFilters();   // แสดงข้อมูลในตาราง
    updateDashboard(); // อัปเดตตัวเลขและกราฟ
    switchTab('dashboard'); // เริ่มที่หน้า Dashboard
}

// 3. Event Listeners สำหรับปุ่มต่างๆ
document.getElementById('tab-dashboard').addEventListener('click', () => switchTab('dashboard'));
document.getElementById('tab-form').addEventListener('click', () => switchTab('form'));
document.getElementById('tab-list').addEventListener('click', () => switchTab('list'));

// เริ่มทำงานเมื่อโหลดไฟล์เสร็จ
window.addEventListener('DOMContentLoaded', initApp);