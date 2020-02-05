export default class CommonDataManager {
  static myInstance = null;

  canGoBack = false;

  baseURL = "test";

  IsLoginWithBioMetric = false;

  showLoader = false;

  failedFingerCount = 0;

  timer = null;

  homeRefresh = "";

  isLaunched = false;

  accOpeningEditModeEnabled = false;

  savedAccData = {};

  screenStateData = {};

  automaticInvestmentEnabled = false;

  savedAutomaticData = {};

  systematicWithdrawalEnabled = false;

  savedSystematicData = {};
  
  /* **************************\
  Method: getInstance
  Explanation:
    this class will be used as singleton class
    It will have its instance
  ============================

  \*************************** */

  static getInstance() {
    if (CommonDataManager.myInstance == null) {
      CommonDataManager.myInstance = new CommonDataManager();
    }

    return this.myInstance;
  }

  getTimerForrefreshToken() {
    return this.timer;
  }

  setTimerForrefreshToken(value) {
    this.timer = value;
  }

  getCanGoBack() {
    return this.canGoBack;
  }

  setCanGoBack(value) {
    this.canGoBack = value;
  }

  getBaseURL() {
    return this.baseURL;
  }

  setSetBaseURL(value) {
    this.baseURL = value;
  }

  getIsLoginWithBioMetric() {
    return this.IsLoginWithBioMetric;
  }

  setIsLoginWithBioMetric(value) {
    
    this.IsLoginWithBioMetric = value;
  }

  getIsLoader() {
    return this.showLoader;
  }

  setIsLoader(value) {
    
    this.showLoader = value;
  }

  getFailedCount() {
    return this.failedFingerCount;
  }

  setFailedCount(value) {
    
    if (value === 1) {
      this.failedFingerCount += value;
    } else {
      this.failedFingerCount = value;
    }
  }

  getHomeRefresh() {
    return this.homeRefresh;
  }

  setHomeRefresh(value) {
    
    this.homeRefresh = value;
  }

  getIsLaunched() {
    return this.isLaunched;
  }

  setIsLaunched() {
    this.isLaunched = true;
  }

  getAccOpeningEditMode(){
    return this.accOpeningEditModeEnabled;
  }

  setAccOpeningEditMode(value){
    this.accOpeningEditModeEnabled = value;
  }

  getSavedAccData(){
    return this.savedAccData;
  }

  setSavedAccData(value){
    this.savedAccData = value;
  }

  getScreenStateData(){
    return this.screenStateData;
  }

  setScreenStateData(value){
    this.screenStateData = value;
    console.log(`this.screenStateData${JSON.stringify(this.screenStateData)}`);
  }

  getAutomaticInvestmentEditMode(){
    return this.automaticInvestmentEnabled;
  }

  setAutomaticInvestmentEditMode(value){
    this.automaticInvestmentEnabled = value;
  }

  getSavedAutomaticData(){
    return this.savedAutomaticData;
  }

  setSavedAutomaticData(value){
    this.savedAutomaticData = value;
  }

  getSystematicWithdrawalEditMode(){
    return this.systematicWithdrawalEnabled;
  }

  setSystematicWithdrawalEditMode(value){
    this.systematicWithdrawalEnabled = value;
  }

  getSavedSystematicData(){
    return this.savedSystematicData;
  }

  setSavedSystematicData(value){
    this.savedSystematicData = value;
  }

}
