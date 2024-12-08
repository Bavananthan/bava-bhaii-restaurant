export class MenuModel {
    constructor(id, menuId, verticalId, storeId, title, subTitle, description, menuAvailability, menuCategoryIDs, createdDate, modifiedDate, createdBy, modifiedBy) {
      this.id = id;
      this.menuId = menuId;
      this.verticalId = verticalId;
      this.storeId = storeId;
      this.title = title;
      this.subTitle = subTitle;
      this.description = description;
      this.menuAvailability = menuAvailability;
      this.menuCategoryIDs = menuCategoryIDs;
      this.createdDate = createdDate;
      this.modifiedDate = modifiedDate;
      this.createdBy = createdBy;
      this.modifiedBy = modifiedBy;
    }
  
    static fromJson(json) {
      return new MenuModel(
        json.ID,
        json.MenuID,
        json.VerticalID,
        json.StoreID,
        json.Title,
        json.SubTitle,
        json.Description,
        json.MenuAvailability,
        json.MenuCategoryIDs,
        json.CreatedDate,
        json.ModifiedDate,
        json.CreatedBy,
        json.ModifiedBy
      );
    }
  }
  