export const userData = [
  {
    formField: "Name",
    type: "text",
    name: "user_name",
  },
  {
    formField: "Email",
    type: "text",
    name: "user_email",
  },
  {
    formField: "Phone Number",
    type: "text",
    name: "user_phone",
  },
];

export const moreInfoInput = [
  {
    formField: "Address",
    type: "text",
    name: "user_address",
    placeHolder: "Enter Address",
  },
  {
    formField: "City",
    type: "text",
    name: "user_city",
    placeHolder: "Enter City",
  },
  {
    formField: "State",
    type: "select",
    name: "user_state",
    placeHolder: "Select State",
  },
  {
    formField: "Garage",
    type: "select",
    name: "user_garage",
    placeHolder: "Select Garage Type",
  },
  {
    formField: "Basement",
    type: "select",
    name: "user_basement",
    placeHolder: "Select Basement",
  },
  {
    formField: "Ownership",
    type: "text",
    name: "user_ownership",
    placeHolder: "How long have you owned the property?",
  },
  {
    formField: "Condition",
    type: "select",
    name: "user_condition",
    placeHolder: "What's the condition of the property?",
  },
  {
    formField: "Repairs",
    type: "text",
    name: "user_repairs",
    placeHolder: "Does the property need any repairs?",
  },
  {
    formField: "Tenants",
    type: "select",
    name: "user_tenants",
    placeHolder: "Do you have any tenants at the property?",
  },
  {
    formField: "Realtor",
    type: "select",
    name: "user_realtor",
  },
  {
    formField: "Timeframe",
    type: "select",
    name: "user_timeframe",
  },
  {
    formField: "Goals",
    type: "text",
    name: "user_goals",
    placeHolder: "What are your goals in selling the property?",
  },
  {
    formField: "Availability",
    type: "select",
    name: "user_availability",
  },
];

export const stateSelects = [
  <>
    <option>Select State</option>
    <option value="SC">SC</option>
    <option value="GA">GA</option>
  </>,
];

export const garageSelects = [
  <>
    <option value="None">None</option>
    <option value="1 Car Attached">1 Car Attached</option>
    <option value="1 Car Detached">1 Car Detached</option>
    <option value="2 Car Attached">2 Car Attached</option>
    <option value="2 Car Detached">2 Car Detached</option>
    <option value="Carport">Carport</option>
  </>,
];

export const basementSelects = [
  <>
    <option value="None">None</option>
    <option value="Finished">Finished</option>
    <option value="Partially Finished">Partially Finished</option>
    <option value="Unfinished">Unfinished</option>
    <option value="Crawl Space">Crawl Space</option>
    <option value="Other">Other</option>
  </>,
];

export const conditionSelects = [
  <>
    <option>What's the condition of the property?</option>
    <option value="Excellent">Excellent</option>
    <option value="Good">Good</option>
    <option value="Fair">Fair</option>
    <option value="Poor">Poor</option>
    <option value="Unlivable">Unlivable</option>
  </>,
];

export const tenantSelects = [
  <>
    <option>Does the property have tenants?</option>
    <option value="Owner Occupied">Owner Occupied</option>
    <option value="Tenant Occupied">Tenant Occupied</option>
    <option value="Vacant">Vacant</option>
  </>,
];

export const realtorSelects = [
  <>
    <option>Are you using a realtor?</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </>,
];

export const timeframeSelects = [
  <>
    <option>What's your timeline?</option>
    <option value="Immediate">Immediate</option>
    <option value="6 months">6 months</option>
    <option value="1 year">1 year</option>
    <option value="No timeline">No timeline</option>
  </>,
];

export const availabilitySelects = [
  <>
    <option>What's your availabilty?</option>
    <option value="Anytime">Anytime</option>
    <option value="Morning">Morning</option>
    <option value="Afternoon">Afternoon</option>
    <option value="Evening">Evening</option>
  </>,
];
