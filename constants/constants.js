const statusTexts = [
  'ΝΕΑ ΠΑΡΑΓΓΕΛΙΑ',
  'ΕΤΟΙΜΑΖΕΤΑΙ',
  'ΕΤΟΙΜΑΣΤΗΚΕ',
  'ΣΤΟΝ ΔΡΟΜΟ'
];
statusTexts[10] = 'ΠΑΡΑΔΟΘΗΚΕ';
statusTexts[99] = 'ΑΠΟΡΡΙΦΘΗΚΕ';

module.exports = {
  MYORDERDELIVERYFIELDS: [
  'orders.id as id',
  'orders.Name as Name',
  'orders.Status as Status',
  'orders.Address as Address',
  'orders.Latitude as Latitude',
  'orders.Longitude as Longitude',
  'orders.Orofos as Orofos',
  'orders.Phone as Phone',
  'orders.Koudouni as Koudouni',
  'orders.Comments as Comments',
  'orders.Items as Items',
  'orders.Extra as Extra',
  'orders.Total as Total',
  'orders.catalogue_id as CatalogueId',
  'orders.postDate as PostDate',
  'orders.hasOpened as Opened',
  'catalogues.Name as ShopName',
  'catalogues.Address as ShopAddress',
  'catalogues.Phone as ShopPhone',
  'catalogues.Latitude as ShopLatitude',
  'catalogues.Longitude as ShopLongitude'
  ],
  MYORDERFIELDS: [
  'orders.id as id',
  'orders.Name as Name',
  'orders.Status as Status',
  'orders.Address as Address',
  'orders.Orofos as Orofos',
  'orders.Phone as Phone',
  'orders.Koudouni as Koudouni',
  'orders.Comments as Comments',
  'orders.Items as Items',
  'orders.Extra as Extra',
  'orders.Total as Total',
  'orders.catalogue_id as CatalogueId',
  'orders.postDate as PostDate',
  'orders.hasOpened as Opened'
  ],
  ORDERFIELDS: [
  'orders.id as id',
  'orders.Name as Name',
  'orders.Status as Status',
  'orders.Address as Address',
  'orders.Latitude as Latitude',
  'orders.Longitude as Longitude',
  'orders.Orofos as Orofos',
  'orders.Phone as Phone',
  'orders.Koudouni as Koudouni',
  'orders.Comments as Comments',
  'orders.Items as Items',
  'orders.Extra as Extra',
  'orders.Total as Total',
  'orders.catalogue_id as CatalogueId',
  'orders.postDate as PostDate',
  'orders.hasOpened as Opened',
  'catalogues.Name as ShopName',
  'catalogues.Address as ShopAddress',
  'catalogues.Phone as ShopPhone',
  'catalogues.Latitude as ShopLatitude',
  'catalogues.Longitude as ShopLongitude',
  'orders.Hashtag as Hashtag',
  'campaigns.Formula as HashtagFormula'
  ],
  PRODUCTSMAINFIELDS: [
  'Price',
  'Name',
  'Description',
  'id'
  ],
  statusTexts
};