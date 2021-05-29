//UI Variables
const form = document.getElementById("loan-form");
const amount = document.getElementById("amount");
const interest = document.getElementById("interest");
const years = document.getElementById("years");
const monthlyPayment = document.getElementById("monthly-payment");
const totalPayment = document.getElementById("total-payment");
const totalInterest = document.getElementById("total-interest");

const error = document.getElementById("error");
const results = document.getElementById("results");
const loader = document.getElementById("loading");


// Calculate Results
const calculateResults = () => {
    console.log("Calculating....");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //Compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x-1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2); 

        // Show results
        results.style.display = "block";    

        // Hide loader
        loader.style.display = "none";

    } else {
        // Hide results
        results.style.display = "none";    

        // Hide loader
        loader.style.display = "none";

        error.style.display = "block"
        setTimeout(clearError, 3000);
    }
    
}

// Clear error
const clearError = () => {
    error.remove();
}



// Listen for submit
form.addEventListener("submit", function (e) {
    // Hide results
    results.style.display = "none";
    
    // Show loader
    loader.style.display = "block";

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});