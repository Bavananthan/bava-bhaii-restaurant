export class CategoriesModel {
    constructor(id, menuCategoryId, menuId, storeId, title, subTitle, menuEntities, createdDate, modifiedDate, createdBy, modifiedBy) {
      this.id = id;
      this.menuCategoryId = menuCategoryId;
      this.menuId = menuId;
      this.storeId = storeId;
      this.title = title;
      this.subTitle = subTitle;
      this.menuEntities = menuEntities;
      this.createdDate = createdDate;
      this.modifiedDate = modifiedDate;
      this.createdBy = createdBy;
      this.modifiedBy = modifiedBy;
    }
  
    static fromJson(json) {
      return new CategoriesModel(
        json.ID,
        json.MenuCategoryID,
        json.MenuID,
        json.StoreID,
        json.Title,
        json.SubTitle,
        json.MenuEntities,
        json.CreatedDate,
        json.ModifiedDate,
        json.CreatedBy,
        json.ModifiedBy
      );
    }
  }
  