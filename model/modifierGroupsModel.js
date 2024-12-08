export class ModifierGroupsModel {
    constructor(id, modifierGroupId, title, description, storeId, displayType, modifierOptions, quantityConstraintsRules, createdDate, modifiedDate, metaData) {
      this.id = id;
      this.modifierGroupId = modifierGroupId;
      this.title = title;
      this.description = description;
      this.storeId = storeId;
      this.displayType = displayType;
      this.modifierOptions = modifierOptions;
      this.quantityConstraintsRules = quantityConstraintsRules;
      this.createdDate = createdDate;
      this.modifiedDate = modifiedDate;
      this.metaData = metaData;
    }
  
    static fromJson(json) {
      return new ModifierGroupsModel(
        json.ID,
        json.ModifierGroupID,
        json.Title,
        json.Description,
        json.StoreID,
        json.DisplayType,
        json.ModifierOptions,
        json.QuantityConstraintsRules,
        json.CreatedDate,
        json.ModifiedDate,
        json.MetaData
      );
    }
  }

  