export class ItemModel {
    constructor(id, menuItemId, storeId, title, description, imageUrl, priceInfo, externalData, categoryIDs, allergens, metaData) {
      this.id = id;
      this.menuItemId = menuItemId;
      this.storeId = storeId;
      this.title = title;
      this.description = description;
      this.imageUrl = imageUrl;
      this.priceInfo = priceInfo;
      this.externalData = externalData;
      this.categoryIDs = categoryIDs;
      this.allergens = allergens;
      this.metaData = metaData;
    }
  
    static fromJson(json) {
      return new ItemModel(
        json.ID,
        json.MenuItemID,
        json.StoreID,
        json.Title,
        json.Description,
        json.ImageURL,
        json.PriceInfo,
        json.ExternalData,
        json.CategoryIDs,
        json.Allergens,
        json.MetaData
      );
    }
  }
  