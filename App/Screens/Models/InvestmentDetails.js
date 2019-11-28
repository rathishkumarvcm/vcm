class InvestmentDetails {
    constructor(
        fundNumber,
        fundName,
        fundingOption,
        fundingOptionDropDown,
        initialInvestment,
        monthlyInvestment,
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
        this.monthlyInvestment = monthlyInvestment;
        this.startDate = startDate;
        this.action = action;
        this.fundingOptionValidation = fundingOptionValidation;
        this.initialInvestmentValidation = initialInvestmentValidation;
        this.monthlyInvestmentValidation = monthlyInvestmentValidation;
        this.startDateValidation = startDateValidation;
    }
}

export default InvestmentDetails;
