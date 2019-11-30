class InvestmentDetails {
    constructor(
        fundNumber,
        fundName,
        fundingOption,
        fundingOptionDropDown,
        initialInvestment,
        mininitialInvestment,
        monthlyInvestment,
        minmonthlyInvestment,
        startDate,
        action,
        fundingOptionValidation,
        initialInvestmentValidation,
        monthlyInvestmentValidation,
        startDateValidation
    ) {
        this.fundNumber = fundNumber;
        this.fundName = fundName;
        this.fundingOption = fundingOption;
        this.fundingOptionDropDown = fundingOptionDropDown;
        this.initialInvestment = initialInvestment;
        this.mininitialInvestment =mininitialInvestment;
        this.monthlyInvestment = monthlyInvestment;
        this.minmonthlyInvestment = minmonthlyInvestment;
        this.startDate = startDate;
        this.action = action;
        this.fundingOptionValidation = fundingOptionValidation;
        this.initialInvestmentValidation = initialInvestmentValidation;
        this.monthlyInvestmentValidation = monthlyInvestmentValidation;
        this.startDateValidation = startDateValidation;
    }
}

export default InvestmentDetails;
