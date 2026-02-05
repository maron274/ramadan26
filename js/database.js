// ============================================
// js/database.js - จัดการข้อมูล (Mockup CRUD)
// ============================================

// ฟังก์ชันบันทึกข้อมูลใหม่
async function saveData(formData) {
    isLoading = true;
    return new Promise((resolve) => {
        setTimeout(() => {
            const newEntry = {
                __backendId: "ID-" + Date.now(), // สร้าง ID จำลอง
                ...formData,
                created_at: new Date().toISOString()
            };
            
            allData.push(newEntry);
            filteredData = [...allData]; // อัปเดตข้อมูลที่พร้อมแสดงผล
            
            isLoading = false;
            resolve({ isOk: true });
        }, 500); // จำลองการหน่วงเวลาส่งข้อมูล 0.5 วินาที
    });
}

// ข้อมูลเริ่มต้นสำหรับทดสอบระบบ (Seed Data)
function loadMockInitialData() {
    allData = [
        {
            __backendId: "1",
            first_name: "สมชาย",
            last_name: "ใจดี",
            organization_region: "ปัตตานี",
            project_type: "ถุงยังชีพ",
            household_members: 5,
            monthly_income: 4500,
            economic_status: "ยากจน"
        },
        {
            __backendId: "2",
            first_name: "มานี",
            last_name: "รักเรียน",
            organization_region: "ยะลา",
            project_type: "อิฟฏอร",
            household_members: 3,
            monthly_income: 8000,
            economic_status: "ปานกลาง"
        }
    ];
    filteredData = [...allData];
}