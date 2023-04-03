#API

## POST /api/addIngredient

Creates a new Ingredient.

### Parameters

| Name                   | Type   | Description              |
| ---------------------- | ------ | ------------------------ |
| ingredient_category    | Int    | FK Required.             |
| name                   | String | min(3) max(50) Required. |
| calories               | Int    | Required.                |
| price                  | number | 2 decimal Required.      |
| ingredient_photo       | String | Required.                |
| ingredient_description | String | Required.                |

### Response

| Name                   | Type   |
| ---------------------- | ------ |
| id                     | PM Int |
| ingredient_category    | Int    |
| name                   | String |
| calories               | Int    |
| price                  | number |
| ingredient_photo       | String |
| ingredient_description | String |

## GET /api/getAllIngredients

### Parameters

NONE

### Response <Array>

| Name                   | Type   |
| ---------------------- | ------ |
| id                     | PM Int |
| ingredient_category    | Int    |
| name                   | String |
| calories               | Int    |
| price                  | number |
| ingredient_photo       | String |
| ingredient_description | String |

## GET /api/getIngredientById/:id

### Parameters

NONE

### Response

| Name                   | Type   |
| ---------------------- | ------ |
| id                     | PM Int |
| ingredient_category    | Int    |
| name                   | String |
| calories               | Int    |
| price                  | number |
| ingredient_photo       | String |
| ingredient_description | String |

## GET /api/getIngredientByName

### Parameters

| Name | Type            |
| ---- | --------------- |
| name | String Required |

### Response

| Name                   | Type   |
| ---------------------- | ------ |
| id                     | PM Int |
| ingredient_category    | Int    |
| name                   | String |
| calories               | Int    |
| price                  | number |
| ingredient_photo       | String |
| ingredient_description | String |

## POST /api/addIngredientCategory

### Parameters

| Name          | Type                    |
| ------------- | ----------------------- |
| category_name | String max(50) Required |

### Response

| Name          | Type   |
| ------------- | ------ |
| id            | PM Int |
| category_name | String |

## GET /api/getAllIngredientCategories

### Parameters

NONE

### Response <Array>

| Name          | Type   |
| ------------- | ------ |
| id            | PM Int |
| category_name | String |

## GET /api/getAllIngredientCategories

### Parameters

NONE

### Response <Array>

| Name          | Type   |
| ------------- | ------ |
| id            | PM Int |
| category_name | String |

## GET /api/getIngredientCategoryById/:id

### Parameters

NONE

### Response

| Name          | Type   |
| ------------- | ------ |
| id            | PM Int |
| category_name | String |

## GET /api/getIngredientCategoryByName

### Parameters

| Name | Type   |
| ---- | ------ |
| name | String |

### Response

| Name          | Type   |
| ------------- | ------ |
| id            | PM Int |
| category_name | String |

## POST /api/addRecipeCategory

### Parameters

| Name          | Type                    |
| ------------- | ----------------------- |
| category_name | String max(50) Required |

### Response <Array>

| Name          | Type   |
| ------------- | ------ |
| id            | PM Int |
| category_name | String |

## GET /api/getRecipeCategoryById/:id

### Parameters

NONE

### Response

| Name          | Type   |
| ------------- | ------ |
| id            | PM Int |
| category_name | String |

## GET /api/getRecipeCategoryByName

### Parameters

| Name | Type   |
| ---- | ------ |
| name | String |

### Response

| Name          | Type   |
| ------------- | ------ |
| id            | PM Int |
| category_name | String |
