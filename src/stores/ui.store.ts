import { observable, action } from "mobx";

export default class UIStore {
  @observable isLoading: boolean = true;
  @observable isFetchingDetails: boolean = false;
  @observable showDetails: boolean = false;

  @action setIsLoading(val: boolean) {
    this.isLoading = val;
  }
  @action setShowDetails(val: boolean) {
    this.showDetails = val;
  }
  @action setIsFetchingDetails(val: boolean) {
    this.isFetchingDetails = val;
  }
}
