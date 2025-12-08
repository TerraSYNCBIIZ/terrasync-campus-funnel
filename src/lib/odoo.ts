// Odoo 19 CRM Integration - Campus/Municipal Funnel
// Configure your Odoo webhook URL in .env.local

export interface LeadData {
  name: string;
  email: string;
  course: string; // Organization name (kept as 'course' for form compatibility)
  phone?: string;
  acres?: string;
  source?: string;
  roiData?: {
    projectedSavings?: number;
    acres?: number;
    laborCost?: number;
    frequency?: number;
    co2Reduction?: number;
    fuelSaved?: number;
  };
}

export async function submitLeadToOdoo(data: LeadData): Promise<{ success: boolean; error?: string }> {
  const webhookUrl = process.env.NEXT_PUBLIC_ODOO_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn("Odoo webhook URL not configured. Falling back to local storage.");
    // Store locally as CSV backup
    storeLeadLocally(data);
    return { success: true };
  }

  const payload = {
    name: `Campus Lead: ${data.course}`,
    partner_name: data.course,  // Organization Name
    contact_name: data.name,
    email_from: data.email,
    phone: data.phone || "",
    description: formatLeadDescription(data),
  };

  try {
    // Direct call to Odoo webhook (works for static export)
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Odoo webhook failed: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting to Odoo:", error);
    // Fallback: store locally
    storeLeadLocally(data);
    return { 
      success: true, // Still show success to user
      error: "Stored locally - Odoo sync pending" 
    };
  }
}

function formatLeadDescription(data: LeadData): string {
  let description = `
Contact: ${data.name}
Email: ${data.email}
Organization: ${data.course}
Phone: ${data.phone || "Not provided"}
Total Acres: ${data.acres || "Not provided"}
Source: ${data.source || "TerraSYNC Campus Landing Page"}
`;

  if (data.roiData) {
    description += `
--- ROI Calculator Data ---
Projected Annual Savings: $${data.roiData.projectedSavings?.toLocaleString() || "N/A"}
Acres Entered: ${data.roiData.acres || "N/A"}
Current Grounds Budget: $${data.roiData.laborCost?.toLocaleString() || "N/A"}
Mowing Frequency: ${data.roiData.frequency || "N/A"}x/week

--- Environmental Impact ---
CO₂ Reduction: ${data.roiData.co2Reduction?.toLocaleString() || "N/A"} lbs/year
Fuel Saved: ${data.roiData.fuelSaved?.toLocaleString() || "N/A"} gallons/year
`;
  }

  return description;
}

function storeLeadLocally(data: LeadData): void {
  // Store in localStorage as backup
  const existingLeads = JSON.parse(localStorage.getItem("terrasync_campus_leads") || "[]");
  existingLeads.push({
    ...data,
    timestamp: new Date().toISOString(),
  });
  localStorage.setItem("terrasync_campus_leads", JSON.stringify(existingLeads));
}

// Utility to export leads as CSV
export function exportLeadsAsCSV(): string {
  const leads = JSON.parse(localStorage.getItem("terrasync_campus_leads") || "[]");
  
  if (leads.length === 0) {
    return "";
  }

  const headers = ["Timestamp", "Name", "Email", "Organization", "Phone", "Acres", "Source", "Projected Savings", "CO2 Reduction"];
  const rows = leads.map((lead: LeadData & { timestamp: string }) => [
    lead.timestamp,
    lead.name,
    lead.email,
    lead.course,
    lead.phone || "",
    lead.acres || "",
    lead.source || "Website",
    lead.roiData?.projectedSavings?.toString() || "",
    lead.roiData?.co2Reduction?.toString() || "",
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row: string[]) => row.map(cell => `"${cell}"`).join(",")),
  ].join("\n");

  return csvContent;
}

// Download leads as CSV file
export function downloadLeadsCSV(): void {
  const csv = exportLeadsAsCSV();
  if (!csv) {
    alert("No leads to export");
    return;
  }

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `terrasync-campus-leads-${new Date().toISOString().split("T")[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
