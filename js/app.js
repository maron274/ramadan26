// ============================================
// js/app.js - ตัวควบคุมหลัก
// ============================================

function initApp() {
    // โหลดข้อมูลจำลองจาก database.js
    loadMockInitialData(); 
    
    // อัปเดตการแสดงผลหน้าแรก
    updateDashboard();    
    renderTable();        
    
    // เริ่มต้นที่หน้า Dashboard เสมอ
    switchTab('dashboard');
    console.log("App Ready");
}

// --- ปุ่มสลับหน้า (Tabs) ---

document.getElementById('tab-dashboard').addEventListener('click', () => {
    switchTab('dashboard');
    updateDashboard();
});

document.getElementById('tab-form').addEventListener('click', () => {
    switchTab('form'); // แสดงฟอร์มเพิ่มข้อมูล
});

document.getElementById('tab-list').addEventListener('click', () => {
    switchTab('list'); // แสดงตารางรายชื่อ
    renderTable();
});

// --- การบันทึกฟอร์ม ---

document.getElementById('beneficiary-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = "กำลังบันทึก...";

    const formData = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        organization_region: document.getElementById('organization_region').value,
        project_type: document.getElementById('project_type').value,
        economic_status: document.getElementById('economic_status').value,
        monthly_income: document.getElementById('monthly_income').value,
        household_members: document.getElementById('household_members').value
    };

    const result = await saveData(formData);

    if (result.isOk) {
        showToast("บันทึกข้อมูลเรียบร้อยแล้ว");
        this.reset();          // ล้างฟอร์ม
        updateDashboard();     // อัปเดตสถิติทันที
        renderTable();         // เตรียมตารางใหม่
        switchTab('list');     // ย้ายไปหน้าตารางเพื่อดูผล
    }
    
    submitBtn.disabled = false;
    submitBtn.textContent = "💾 บันทึกข้อมูล";
});

// รันระบบ
window.addEventListener('DOMContentLoaded', initApp);