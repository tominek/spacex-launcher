import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'
import * as VueCompositionApi from 'vue'

export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type IAggregate = {
  __typename: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type IAsset = INode & {
  __typename: 'Asset';
  alt?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<IAsset>;
  /** The file name */
  fileName: Scalars['String'];
  flickrImagesLink: Array<ILink>;
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageRocket: Array<IRocket>;
  /** System Locale field */
  locale: ILocale;
  /** Get the other localizations for this document */
  localizations: Array<IAsset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: IStage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type IAssetCreatedAtArgs = {
  variation?: ISystemDateTimeFieldVariation;
};


/** Asset system model */
export type IAssetCreatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


/** Asset system model */
export type IAssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


/** Asset system model */
export type IAssetFlickrImagesLinkArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  orderBy?: InputMaybe<ILinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ILinkWhereInput>;
};


/** Asset system model */
export type IAssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<IStage>;
};


/** Asset system model */
export type IAssetImageRocketArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  orderBy?: InputMaybe<IRocketOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IRocketWhereInput>;
};


/** Asset system model */
export type IAssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<ILocale>;
};


/** Asset system model */
export type IAssetPublishedAtArgs = {
  variation?: ISystemDateTimeFieldVariation;
};


/** Asset system model */
export type IAssetPublishedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


/** Asset system model */
export type IAssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
};


/** Asset system model */
export type IAssetUpdatedAtArgs = {
  variation?: ISystemDateTimeFieldVariation;
};


/** Asset system model */
export type IAssetUpdatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


/** Asset system model */
export type IAssetUrlArgs = {
  transformation?: InputMaybe<IAssetTransformationInput>;
};

export type IAssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IAssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type IAssetConnection = {
  __typename: 'AssetConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IAssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type IAssetCreateInput = {
  alt?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  flickrImagesLink?: InputMaybe<ILinkCreateManyInlineInput>;
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageRocket?: InputMaybe<IRocketCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<IAssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type IAssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type IAssetCreateLocalizationInput = {
  /** Localization input */
  data: IAssetCreateLocalizationDataInput;
  locale: ILocale;
};

export type IAssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<IAssetCreateLocalizationInput>>;
};

export type IAssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<IAssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<IAssetCreateInput>>;
};

export type IAssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<IAssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<IAssetCreateInput>;
};

/** An edge in a connection. */
export type IAssetEdge = {
  __typename: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IAsset;
};

/** Identifies documents */
export type IAssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IAssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IAssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IAssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  alt?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  alt_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  alt_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  alt_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  alt_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  alt_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  alt_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  alt_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  alt_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  alt_starts_with?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  caption_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  caption_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  caption_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  caption_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  caption_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  caption_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  caption_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  caption_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  caption_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  flickrImagesLink_every?: InputMaybe<ILinkWhereInput>;
  flickrImagesLink_none?: InputMaybe<ILinkWhereInput>;
  flickrImagesLink_some?: InputMaybe<ILinkWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageRocket_every?: InputMaybe<IRocketWhereInput>;
  imageRocket_none?: InputMaybe<IRocketWhereInput>;
  imageRocket_some?: InputMaybe<IRocketWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
};

export enum IAssetOrderByInput {
  AltAsc = 'alt_ASC',
  AltDesc = 'alt_DESC',
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type IAssetTransformationInput = {
  document?: InputMaybe<IDocumentTransformationInput>;
  image?: InputMaybe<IImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type IAssetUpdateInput = {
  alt?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  flickrImagesLink?: InputMaybe<ILinkUpdateManyInlineInput>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageRocket?: InputMaybe<IRocketUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<IAssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type IAssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type IAssetUpdateLocalizationInput = {
  data: IAssetUpdateLocalizationDataInput;
  locale: ILocale;
};

export type IAssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<IAssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<ILocale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<IAssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<IAssetUpsertLocalizationInput>>;
};

export type IAssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<IAssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<IAssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<IAssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<IAssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<IAssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<IAssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<IAssetUpsertWithNestedWhereUniqueInput>>;
};

export type IAssetUpdateManyInput = {
  alt?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<IAssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type IAssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type IAssetUpdateManyLocalizationInput = {
  data: IAssetUpdateManyLocalizationDataInput;
  locale: ILocale;
};

export type IAssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<IAssetUpdateManyLocalizationInput>>;
};

export type IAssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: IAssetUpdateManyInput;
  /** Document search */
  where: IAssetWhereInput;
};

export type IAssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<IAssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<IAssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<IAssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<IAssetUpsertWithNestedWhereUniqueInput>;
};

export type IAssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: IAssetUpdateInput;
  /** Unique document search */
  where: IAssetWhereUniqueInput;
};

export type IAssetUpsertInput = {
  /** Create document if it didn't exist */
  create: IAssetCreateInput;
  /** Update document if it exists */
  update: IAssetUpdateInput;
};

export type IAssetUpsertLocalizationInput = {
  create: IAssetCreateLocalizationDataInput;
  locale: ILocale;
  update: IAssetUpdateLocalizationDataInput;
};

export type IAssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: IAssetUpsertInput;
  /** Unique document search */
  where: IAssetWhereUniqueInput;
};

/** Identifies documents */
export type IAssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IAssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IAssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IAssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  alt?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  alt_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  alt_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  alt_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  alt_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  alt_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  alt_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  alt_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  alt_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  alt_starts_with?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  caption_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  caption_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  caption_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  caption_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  caption_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  caption_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  caption_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  caption_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  caption_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  flickrImagesLink_every?: InputMaybe<ILinkWhereInput>;
  flickrImagesLink_none?: InputMaybe<ILinkWhereInput>;
  flickrImagesLink_some?: InputMaybe<ILinkWhereInput>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageRocket_every?: InputMaybe<IRocketWhereInput>;
  imageRocket_none?: InputMaybe<IRocketWhereInput>;
  imageRocket_some?: InputMaybe<IRocketWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type IAssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type IBatchPayload = {
  __typename: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type IColor = {
  __typename: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: IRgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type IColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<IRgbaInput>;
};

export type IConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum IDocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type IDocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:  jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:  docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:  doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:  doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:  jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:  jpg, pdf, ods, png, svg, xls, and webp
   * ODS:  jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:  jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:  jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:  jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:  jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:  jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:  jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:  jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:  jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:  jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:      jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:  jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:  jpg, odp, ods, odt, pdf, png, and webp
   * HTML:  jpg, odt, pdf, svg, txt, and webp
   * TXT:  jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<IDocumentFileTypes>;
};

/** Transformations for Documents */
export type IDocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<IDocumentOutputInput>;
};

export type IDocumentVersion = {
  __typename: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: IStage;
};

export enum IImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type IImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<IImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type IImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<IImageResizeInput>;
};

export type ILaunch = INode & {
  __typename: 'Launch';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  date: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<ILaunch>;
  /** List of Launch versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  launchSite?: Maybe<ILaunchSite>;
  launchSuccess?: Maybe<Scalars['Boolean']>;
  link?: Maybe<ILink>;
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  rocket?: Maybe<IRocket>;
  scheduledIn: Array<IScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: IStage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
  year?: Maybe<Scalars['String']>;
};


export type ILaunchCreatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


export type ILaunchDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


export type ILaunchHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<IStage>;
};


export type ILaunchLaunchSiteArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


export type ILaunchLinkArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


export type ILaunchPublishedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


export type ILaunchRocketArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


export type ILaunchScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
};


export type ILaunchUpdatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};

export type ILaunchConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: ILaunchWhereUniqueInput;
};

/** A connection to a list of items. */
export type ILaunchConnection = {
  __typename: 'LaunchConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<ILaunchEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type ILaunchCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  launchSite?: InputMaybe<ILaunchSiteCreateOneInlineInput>;
  launchSuccess?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<ILinkCreateOneInlineInput>;
  name: Scalars['String'];
  rocket?: InputMaybe<IRocketCreateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  year?: InputMaybe<Scalars['String']>;
};

export type ILaunchCreateManyInlineInput = {
  /** Connect multiple existing Launch documents */
  connect?: InputMaybe<Array<ILaunchWhereUniqueInput>>;
  /** Create and connect multiple existing Launch documents */
  create?: InputMaybe<Array<ILaunchCreateInput>>;
};

export type ILaunchCreateOneInlineInput = {
  /** Connect one existing Launch document */
  connect?: InputMaybe<ILaunchWhereUniqueInput>;
  /** Create and connect one Launch document */
  create?: InputMaybe<ILaunchCreateInput>;
};

/** An edge in a connection. */
export type ILaunchEdge = {
  __typename: 'LaunchEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ILaunch;
};

/** Identifies documents */
export type ILaunchManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ILaunchWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ILaunchWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ILaunchWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  date?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  launchSite?: InputMaybe<ILaunchSiteWhereInput>;
  launchSuccess?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  launchSuccess_not?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<ILinkWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  rocket?: InputMaybe<IRocketWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
  year?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  year_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  year_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  year_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  year_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  year_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  year_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  year_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  year_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  year_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ILaunchOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LaunchSuccessAsc = 'launchSuccess_ASC',
  LaunchSuccessDesc = 'launchSuccess_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC'
}

export type ILaunchSite = INode & {
  __typename: 'LaunchSite';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<ILaunchSite>;
  /** List of LaunchSite versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  longName: Scalars['String'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  /** System stage field */
  stage: IStage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
};


export type ILaunchSiteCreatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


export type ILaunchSiteDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


export type ILaunchSiteHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<IStage>;
};


export type ILaunchSitePublishedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


export type ILaunchSiteScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
};


export type ILaunchSiteUpdatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};

export type ILaunchSiteConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: ILaunchSiteWhereUniqueInput;
};

/** A connection to a list of items. */
export type ILaunchSiteConnection = {
  __typename: 'LaunchSiteConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<ILaunchSiteEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type ILaunchSiteCreateInput = {
  cksg4ze260bf601xlfll0d4sj?: InputMaybe<ILaunchCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  longName: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ILaunchSiteCreateManyInlineInput = {
  /** Connect multiple existing LaunchSite documents */
  connect?: InputMaybe<Array<ILaunchSiteWhereUniqueInput>>;
  /** Create and connect multiple existing LaunchSite documents */
  create?: InputMaybe<Array<ILaunchSiteCreateInput>>;
};

export type ILaunchSiteCreateOneInlineInput = {
  /** Connect one existing LaunchSite document */
  connect?: InputMaybe<ILaunchSiteWhereUniqueInput>;
  /** Create and connect one LaunchSite document */
  create?: InputMaybe<ILaunchSiteCreateInput>;
};

/** An edge in a connection. */
export type ILaunchSiteEdge = {
  __typename: 'LaunchSiteEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ILaunchSite;
};

/** Identifies documents */
export type ILaunchSiteManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ILaunchSiteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ILaunchSiteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ILaunchSiteWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  longName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  longName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  longName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  longName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  longName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  longName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  longName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  longName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  longName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  longName_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
};

export enum ILaunchSiteOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LongNameAsc = 'longName_ASC',
  LongNameDesc = 'longName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ILaunchSiteUpdateInput = {
  cksg4ze260bf601xlfll0d4sj?: InputMaybe<ILaunchUpdateManyInlineInput>;
  longName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ILaunchSiteUpdateManyInlineInput = {
  /** Connect multiple existing LaunchSite documents */
  connect?: InputMaybe<Array<ILaunchSiteConnectInput>>;
  /** Create and connect multiple LaunchSite documents */
  create?: InputMaybe<Array<ILaunchSiteCreateInput>>;
  /** Delete multiple LaunchSite documents */
  delete?: InputMaybe<Array<ILaunchSiteWhereUniqueInput>>;
  /** Disconnect multiple LaunchSite documents */
  disconnect?: InputMaybe<Array<ILaunchSiteWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LaunchSite documents */
  set?: InputMaybe<Array<ILaunchSiteWhereUniqueInput>>;
  /** Update multiple LaunchSite documents */
  update?: InputMaybe<Array<ILaunchSiteUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LaunchSite documents */
  upsert?: InputMaybe<Array<ILaunchSiteUpsertWithNestedWhereUniqueInput>>;
};

export type ILaunchSiteUpdateManyInput = {
  longName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ILaunchSiteUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ILaunchSiteUpdateManyInput;
  /** Document search */
  where: ILaunchSiteWhereInput;
};

export type ILaunchSiteUpdateOneInlineInput = {
  /** Connect existing LaunchSite document */
  connect?: InputMaybe<ILaunchSiteWhereUniqueInput>;
  /** Create and connect one LaunchSite document */
  create?: InputMaybe<ILaunchSiteCreateInput>;
  /** Delete currently connected LaunchSite document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected LaunchSite document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single LaunchSite document */
  update?: InputMaybe<ILaunchSiteUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LaunchSite document */
  upsert?: InputMaybe<ILaunchSiteUpsertWithNestedWhereUniqueInput>;
};

export type ILaunchSiteUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ILaunchSiteUpdateInput;
  /** Unique document search */
  where: ILaunchSiteWhereUniqueInput;
};

export type ILaunchSiteUpsertInput = {
  /** Create document if it didn't exist */
  create: ILaunchSiteCreateInput;
  /** Update document if it exists */
  update: ILaunchSiteUpdateInput;
};

export type ILaunchSiteUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ILaunchSiteUpsertInput;
  /** Unique document search */
  where: ILaunchSiteWhereUniqueInput;
};

/** Identifies documents */
export type ILaunchSiteWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ILaunchSiteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ILaunchSiteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ILaunchSiteWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  longName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  longName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  longName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  longName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  longName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  longName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  longName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  longName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  longName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  longName_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
};

/** References LaunchSite record uniquely */
export type ILaunchSiteWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ILaunchUpdateInput = {
  date?: InputMaybe<Scalars['DateTime']>;
  launchSite?: InputMaybe<ILaunchSiteUpdateOneInlineInput>;
  launchSuccess?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<ILinkUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  rocket?: InputMaybe<IRocketUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['String']>;
};

export type ILaunchUpdateManyInlineInput = {
  /** Connect multiple existing Launch documents */
  connect?: InputMaybe<Array<ILaunchConnectInput>>;
  /** Create and connect multiple Launch documents */
  create?: InputMaybe<Array<ILaunchCreateInput>>;
  /** Delete multiple Launch documents */
  delete?: InputMaybe<Array<ILaunchWhereUniqueInput>>;
  /** Disconnect multiple Launch documents */
  disconnect?: InputMaybe<Array<ILaunchWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Launch documents */
  set?: InputMaybe<Array<ILaunchWhereUniqueInput>>;
  /** Update multiple Launch documents */
  update?: InputMaybe<Array<ILaunchUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Launch documents */
  upsert?: InputMaybe<Array<ILaunchUpsertWithNestedWhereUniqueInput>>;
};

export type ILaunchUpdateManyInput = {
  date?: InputMaybe<Scalars['DateTime']>;
  launchSuccess?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['String']>;
};

export type ILaunchUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ILaunchUpdateManyInput;
  /** Document search */
  where: ILaunchWhereInput;
};

export type ILaunchUpdateOneInlineInput = {
  /** Connect existing Launch document */
  connect?: InputMaybe<ILaunchWhereUniqueInput>;
  /** Create and connect one Launch document */
  create?: InputMaybe<ILaunchCreateInput>;
  /** Delete currently connected Launch document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Launch document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Launch document */
  update?: InputMaybe<ILaunchUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Launch document */
  upsert?: InputMaybe<ILaunchUpsertWithNestedWhereUniqueInput>;
};

export type ILaunchUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ILaunchUpdateInput;
  /** Unique document search */
  where: ILaunchWhereUniqueInput;
};

export type ILaunchUpsertInput = {
  /** Create document if it didn't exist */
  create: ILaunchCreateInput;
  /** Update document if it exists */
  update: ILaunchUpdateInput;
};

export type ILaunchUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ILaunchUpsertInput;
  /** Unique document search */
  where: ILaunchWhereUniqueInput;
};

/** Identifies documents */
export type ILaunchWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ILaunchWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ILaunchWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ILaunchWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  date?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  launchSite?: InputMaybe<ILaunchSiteWhereInput>;
  launchSuccess?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  launchSuccess_not?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<ILinkWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  rocket?: InputMaybe<IRocketWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
  year?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  year_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  year_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  year_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  year_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  year_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  year_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  year_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  year_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  year_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Launch record uniquely */
export type ILaunchWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ILink = INode & {
  __typename: 'Link';
  article?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<ILink>;
  flickrImages: Array<IAsset>;
  /** List of Link versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  pressKit?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  /** System stage field */
  stage: IStage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
  video?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};


export type ILinkCreatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


export type ILinkDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


export type ILinkFlickrImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  orderBy?: InputMaybe<IAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAssetWhereInput>;
};


export type ILinkHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<IStage>;
};


export type ILinkPublishedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


export type ILinkScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
};


export type ILinkUpdatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};

export type ILinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: ILinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type ILinkConnection = {
  __typename: 'LinkConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<ILinkEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type ILinkCreateInput = {
  article?: InputMaybe<Scalars['String']>;
  cksga2ay60ihm01xl8hpq5aam?: InputMaybe<ILaunchCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flickrImages?: InputMaybe<IAssetCreateManyInlineInput>;
  pressKit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  video?: InputMaybe<Scalars['String']>;
  wikipedia?: InputMaybe<Scalars['String']>;
};

export type ILinkCreateManyInlineInput = {
  /** Connect multiple existing Link documents */
  connect?: InputMaybe<Array<ILinkWhereUniqueInput>>;
  /** Create and connect multiple existing Link documents */
  create?: InputMaybe<Array<ILinkCreateInput>>;
};

export type ILinkCreateOneInlineInput = {
  /** Connect one existing Link document */
  connect?: InputMaybe<ILinkWhereUniqueInput>;
  /** Create and connect one Link document */
  create?: InputMaybe<ILinkCreateInput>;
};

/** An edge in a connection. */
export type ILinkEdge = {
  __typename: 'LinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ILink;
};

/** Identifies documents */
export type ILinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ILinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ILinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ILinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  article?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  article_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  article_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  article_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  article_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  article_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  article_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  article_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  article_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  article_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  flickrImages_every?: InputMaybe<IAssetWhereInput>;
  flickrImages_none?: InputMaybe<IAssetWhereInput>;
  flickrImages_some?: InputMaybe<IAssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  pressKit?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pressKit_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pressKit_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pressKit_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  pressKit_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pressKit_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pressKit_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pressKit_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  pressKit_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pressKit_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
  video?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  video_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  video_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  video_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  video_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  video_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  video_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  video_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  video_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  video_starts_with?: InputMaybe<Scalars['String']>;
  wikipedia?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  wikipedia_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  wikipedia_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  wikipedia_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  wikipedia_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  wikipedia_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  wikipedia_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  wikipedia_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  wikipedia_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  wikipedia_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ILinkOrderByInput {
  ArticleAsc = 'article_ASC',
  ArticleDesc = 'article_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PressKitAsc = 'pressKit_ASC',
  PressKitDesc = 'pressKit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VideoAsc = 'video_ASC',
  VideoDesc = 'video_DESC',
  WikipediaAsc = 'wikipedia_ASC',
  WikipediaDesc = 'wikipedia_DESC'
}

export type ILinkUpdateInput = {
  article?: InputMaybe<Scalars['String']>;
  cksga2ay60ihm01xl8hpq5aam?: InputMaybe<ILaunchUpdateManyInlineInput>;
  flickrImages?: InputMaybe<IAssetUpdateManyInlineInput>;
  pressKit?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['String']>;
  wikipedia?: InputMaybe<Scalars['String']>;
};

export type ILinkUpdateManyInlineInput = {
  /** Connect multiple existing Link documents */
  connect?: InputMaybe<Array<ILinkConnectInput>>;
  /** Create and connect multiple Link documents */
  create?: InputMaybe<Array<ILinkCreateInput>>;
  /** Delete multiple Link documents */
  delete?: InputMaybe<Array<ILinkWhereUniqueInput>>;
  /** Disconnect multiple Link documents */
  disconnect?: InputMaybe<Array<ILinkWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Link documents */
  set?: InputMaybe<Array<ILinkWhereUniqueInput>>;
  /** Update multiple Link documents */
  update?: InputMaybe<Array<ILinkUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Link documents */
  upsert?: InputMaybe<Array<ILinkUpsertWithNestedWhereUniqueInput>>;
};

export type ILinkUpdateManyInput = {
  article?: InputMaybe<Scalars['String']>;
  pressKit?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['String']>;
  wikipedia?: InputMaybe<Scalars['String']>;
};

export type ILinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ILinkUpdateManyInput;
  /** Document search */
  where: ILinkWhereInput;
};

export type ILinkUpdateOneInlineInput = {
  /** Connect existing Link document */
  connect?: InputMaybe<ILinkWhereUniqueInput>;
  /** Create and connect one Link document */
  create?: InputMaybe<ILinkCreateInput>;
  /** Delete currently connected Link document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Link document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Link document */
  update?: InputMaybe<ILinkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Link document */
  upsert?: InputMaybe<ILinkUpsertWithNestedWhereUniqueInput>;
};

export type ILinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ILinkUpdateInput;
  /** Unique document search */
  where: ILinkWhereUniqueInput;
};

export type ILinkUpsertInput = {
  /** Create document if it didn't exist */
  create: ILinkCreateInput;
  /** Update document if it exists */
  update: ILinkUpdateInput;
};

export type ILinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ILinkUpsertInput;
  /** Unique document search */
  where: ILinkWhereUniqueInput;
};

/** Identifies documents */
export type ILinkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ILinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ILinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ILinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  article?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  article_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  article_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  article_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  article_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  article_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  article_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  article_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  article_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  article_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  flickrImages_every?: InputMaybe<IAssetWhereInput>;
  flickrImages_none?: InputMaybe<IAssetWhereInput>;
  flickrImages_some?: InputMaybe<IAssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  pressKit?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pressKit_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pressKit_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pressKit_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  pressKit_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pressKit_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pressKit_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pressKit_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  pressKit_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pressKit_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
  video?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  video_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  video_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  video_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  video_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  video_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  video_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  video_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  video_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  video_starts_with?: InputMaybe<Scalars['String']>;
  wikipedia?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  wikipedia_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  wikipedia_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  wikipedia_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  wikipedia_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  wikipedia_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  wikipedia_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  wikipedia_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  wikipedia_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  wikipedia_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Link record uniquely */
export type ILinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum ILocale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type ILocation = {
  __typename: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type ILocationDistanceArgs = {
  from: ILocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type ILocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type IMutation = {
  __typename: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<IAsset>;
  /** Create one launch */
  createLaunch?: Maybe<ILaunch>;
  /** Create one launchSite */
  createLaunchSite?: Maybe<ILaunchSite>;
  /** Create one link */
  createLink?: Maybe<ILink>;
  /** Create one rocket */
  createRocket?: Maybe<IRocket>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<IScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<IAsset>;
  /** Delete one launch from _all_ existing stages. Returns deleted document. */
  deleteLaunch?: Maybe<ILaunch>;
  /** Delete one launchSite from _all_ existing stages. Returns deleted document. */
  deleteLaunchSite?: Maybe<ILaunchSite>;
  /** Delete one link from _all_ existing stages. Returns deleted document. */
  deleteLink?: Maybe<ILink>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: IBatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: IAssetConnection;
  /**
   * Delete many LaunchSite documents
   * @deprecated Please use the new paginated many mutation (deleteManyLaunchSitesConnection)
   */
  deleteManyLaunchSites: IBatchPayload;
  /** Delete many LaunchSite documents, return deleted documents */
  deleteManyLaunchSitesConnection: ILaunchSiteConnection;
  /**
   * Delete many Launch documents
   * @deprecated Please use the new paginated many mutation (deleteManyLaunchesConnection)
   */
  deleteManyLaunches: IBatchPayload;
  /** Delete many Launch documents, return deleted documents */
  deleteManyLaunchesConnection: ILaunchConnection;
  /**
   * Delete many Link documents
   * @deprecated Please use the new paginated many mutation (deleteManyLinksConnection)
   */
  deleteManyLinks: IBatchPayload;
  /** Delete many Link documents, return deleted documents */
  deleteManyLinksConnection: ILinkConnection;
  /**
   * Delete many Rocket documents
   * @deprecated Please use the new paginated many mutation (deleteManyRocketsConnection)
   */
  deleteManyRockets: IBatchPayload;
  /** Delete many Rocket documents, return deleted documents */
  deleteManyRocketsConnection: IRocketConnection;
  /** Delete one rocket from _all_ existing stages. Returns deleted document. */
  deleteRocket?: Maybe<IRocket>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<IScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<IScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<IAsset>;
  /** Publish one launch */
  publishLaunch?: Maybe<ILaunch>;
  /** Publish one launchSite */
  publishLaunchSite?: Maybe<ILaunchSite>;
  /** Publish one link */
  publishLink?: Maybe<ILink>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: IBatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: IAssetConnection;
  /**
   * Publish many LaunchSite documents
   * @deprecated Please use the new paginated many mutation (publishManyLaunchSitesConnection)
   */
  publishManyLaunchSites: IBatchPayload;
  /** Publish many LaunchSite documents */
  publishManyLaunchSitesConnection: ILaunchSiteConnection;
  /**
   * Publish many Launch documents
   * @deprecated Please use the new paginated many mutation (publishManyLaunchesConnection)
   */
  publishManyLaunches: IBatchPayload;
  /** Publish many Launch documents */
  publishManyLaunchesConnection: ILaunchConnection;
  /**
   * Publish many Link documents
   * @deprecated Please use the new paginated many mutation (publishManyLinksConnection)
   */
  publishManyLinks: IBatchPayload;
  /** Publish many Link documents */
  publishManyLinksConnection: ILinkConnection;
  /**
   * Publish many Rocket documents
   * @deprecated Please use the new paginated many mutation (publishManyRocketsConnection)
   */
  publishManyRockets: IBatchPayload;
  /** Publish many Rocket documents */
  publishManyRocketsConnection: IRocketConnection;
  /** Publish one rocket */
  publishRocket?: Maybe<IRocket>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<IAsset>;
  /** Schedule to publish one launch */
  schedulePublishLaunch?: Maybe<ILaunch>;
  /** Schedule to publish one launchSite */
  schedulePublishLaunchSite?: Maybe<ILaunchSite>;
  /** Schedule to publish one link */
  schedulePublishLink?: Maybe<ILink>;
  /** Schedule to publish one rocket */
  schedulePublishRocket?: Maybe<IRocket>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<IAsset>;
  /** Unpublish one launch from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLaunch?: Maybe<ILaunch>;
  /** Unpublish one launchSite from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLaunchSite?: Maybe<ILaunchSite>;
  /** Unpublish one link from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLink?: Maybe<ILink>;
  /** Unpublish one rocket from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishRocket?: Maybe<IRocket>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<IAsset>;
  /** Unpublish one launch from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLaunch?: Maybe<ILaunch>;
  /** Unpublish one launchSite from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLaunchSite?: Maybe<ILaunchSite>;
  /** Unpublish one link from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLink?: Maybe<ILink>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: IBatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: IAssetConnection;
  /**
   * Unpublish many LaunchSite documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLaunchSitesConnection)
   */
  unpublishManyLaunchSites: IBatchPayload;
  /** Find many LaunchSite documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLaunchSitesConnection: ILaunchSiteConnection;
  /**
   * Unpublish many Launch documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLaunchesConnection)
   */
  unpublishManyLaunches: IBatchPayload;
  /** Find many Launch documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLaunchesConnection: ILaunchConnection;
  /**
   * Unpublish many Link documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLinksConnection)
   */
  unpublishManyLinks: IBatchPayload;
  /** Find many Link documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLinksConnection: ILinkConnection;
  /**
   * Unpublish many Rocket documents
   * @deprecated Please use the new paginated many mutation (unpublishManyRocketsConnection)
   */
  unpublishManyRockets: IBatchPayload;
  /** Find many Rocket documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyRocketsConnection: IRocketConnection;
  /** Unpublish one rocket from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishRocket?: Maybe<IRocket>;
  /** Update one asset */
  updateAsset?: Maybe<IAsset>;
  /** Update one launch */
  updateLaunch?: Maybe<ILaunch>;
  /** Update one launchSite */
  updateLaunchSite?: Maybe<ILaunchSite>;
  /** Update one link */
  updateLink?: Maybe<ILink>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: IBatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: IAssetConnection;
  /**
   * Update many launchSites
   * @deprecated Please use the new paginated many mutation (updateManyLaunchSitesConnection)
   */
  updateManyLaunchSites: IBatchPayload;
  /** Update many LaunchSite documents */
  updateManyLaunchSitesConnection: ILaunchSiteConnection;
  /**
   * Update many launches
   * @deprecated Please use the new paginated many mutation (updateManyLaunchesConnection)
   */
  updateManyLaunches: IBatchPayload;
  /** Update many Launch documents */
  updateManyLaunchesConnection: ILaunchConnection;
  /**
   * Update many links
   * @deprecated Please use the new paginated many mutation (updateManyLinksConnection)
   */
  updateManyLinks: IBatchPayload;
  /** Update many Link documents */
  updateManyLinksConnection: ILinkConnection;
  /**
   * Update many rockets
   * @deprecated Please use the new paginated many mutation (updateManyRocketsConnection)
   */
  updateManyRockets: IBatchPayload;
  /** Update many Rocket documents */
  updateManyRocketsConnection: IRocketConnection;
  /** Update one rocket */
  updateRocket?: Maybe<IRocket>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<IScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<IAsset>;
  /** Upsert one launch */
  upsertLaunch?: Maybe<ILaunch>;
  /** Upsert one launchSite */
  upsertLaunchSite?: Maybe<ILaunchSite>;
  /** Upsert one link */
  upsertLink?: Maybe<ILink>;
  /** Upsert one rocket */
  upsertRocket?: Maybe<IRocket>;
};


export type IMutationCreateAssetArgs = {
  data: IAssetCreateInput;
};


export type IMutationCreateLaunchArgs = {
  data: ILaunchCreateInput;
};


export type IMutationCreateLaunchSiteArgs = {
  data: ILaunchSiteCreateInput;
};


export type IMutationCreateLinkArgs = {
  data: ILinkCreateInput;
};


export type IMutationCreateRocketArgs = {
  data: IRocketCreateInput;
};


export type IMutationCreateScheduledReleaseArgs = {
  data: IScheduledReleaseCreateInput;
};


export type IMutationDeleteAssetArgs = {
  where: IAssetWhereUniqueInput;
};


export type IMutationDeleteLaunchArgs = {
  where: ILaunchWhereUniqueInput;
};


export type IMutationDeleteLaunchSiteArgs = {
  where: ILaunchSiteWhereUniqueInput;
};


export type IMutationDeleteLinkArgs = {
  where: ILinkWhereUniqueInput;
};


export type IMutationDeleteManyAssetsArgs = {
  where?: InputMaybe<IAssetManyWhereInput>;
};


export type IMutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAssetManyWhereInput>;
};


export type IMutationDeleteManyLaunchSitesArgs = {
  where?: InputMaybe<ILaunchSiteManyWhereInput>;
};


export type IMutationDeleteManyLaunchSitesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ILaunchSiteManyWhereInput>;
};


export type IMutationDeleteManyLaunchesArgs = {
  where?: InputMaybe<ILaunchManyWhereInput>;
};


export type IMutationDeleteManyLaunchesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ILaunchManyWhereInput>;
};


export type IMutationDeleteManyLinksArgs = {
  where?: InputMaybe<ILinkManyWhereInput>;
};


export type IMutationDeleteManyLinksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ILinkManyWhereInput>;
};


export type IMutationDeleteManyRocketsArgs = {
  where?: InputMaybe<IRocketManyWhereInput>;
};


export type IMutationDeleteManyRocketsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IRocketManyWhereInput>;
};


export type IMutationDeleteRocketArgs = {
  where: IRocketWhereUniqueInput;
};


export type IMutationDeleteScheduledOperationArgs = {
  where: IScheduledOperationWhereUniqueInput;
};


export type IMutationDeleteScheduledReleaseArgs = {
  where: IScheduledReleaseWhereUniqueInput;
};


export type IMutationPublishAssetArgs = {
  locales?: InputMaybe<Array<ILocale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<IStage>;
  where: IAssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type IMutationPublishLaunchArgs = {
  to?: Array<IStage>;
  where: ILaunchWhereUniqueInput;
};


export type IMutationPublishLaunchSiteArgs = {
  to?: Array<IStage>;
  where: ILaunchSiteWhereUniqueInput;
};


export type IMutationPublishLinkArgs = {
  to?: Array<IStage>;
  where: ILinkWhereUniqueInput;
};


export type IMutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<ILocale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<IStage>;
  where?: InputMaybe<IAssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type IMutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<IStage>;
  where?: InputMaybe<IAssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type IMutationPublishManyLaunchSitesArgs = {
  to?: Array<IStage>;
  where?: InputMaybe<ILaunchSiteManyWhereInput>;
};


export type IMutationPublishManyLaunchSitesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<IStage>;
  where?: InputMaybe<ILaunchSiteManyWhereInput>;
};


export type IMutationPublishManyLaunchesArgs = {
  to?: Array<IStage>;
  where?: InputMaybe<ILaunchManyWhereInput>;
};


export type IMutationPublishManyLaunchesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<IStage>;
  where?: InputMaybe<ILaunchManyWhereInput>;
};


export type IMutationPublishManyLinksArgs = {
  to?: Array<IStage>;
  where?: InputMaybe<ILinkManyWhereInput>;
};


export type IMutationPublishManyLinksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<IStage>;
  where?: InputMaybe<ILinkManyWhereInput>;
};


export type IMutationPublishManyRocketsArgs = {
  to?: Array<IStage>;
  where?: InputMaybe<IRocketManyWhereInput>;
};


export type IMutationPublishManyRocketsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<IStage>;
  where?: InputMaybe<IRocketManyWhereInput>;
};


export type IMutationPublishRocketArgs = {
  to?: Array<IStage>;
  where: IRocketWhereUniqueInput;
};


export type IMutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<ILocale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<IStage>;
  where: IAssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type IMutationSchedulePublishLaunchArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<IStage>;
  where: ILaunchWhereUniqueInput;
};


export type IMutationSchedulePublishLaunchSiteArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<IStage>;
  where: ILaunchSiteWhereUniqueInput;
};


export type IMutationSchedulePublishLinkArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<IStage>;
  where: ILinkWhereUniqueInput;
};


export type IMutationSchedulePublishRocketArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<IStage>;
  where: IRocketWhereUniqueInput;
};


export type IMutationScheduleUnpublishAssetArgs = {
  from?: Array<IStage>;
  locales?: InputMaybe<Array<ILocale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: IAssetWhereUniqueInput;
};


export type IMutationScheduleUnpublishLaunchArgs = {
  from?: Array<IStage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ILaunchWhereUniqueInput;
};


export type IMutationScheduleUnpublishLaunchSiteArgs = {
  from?: Array<IStage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ILaunchSiteWhereUniqueInput;
};


export type IMutationScheduleUnpublishLinkArgs = {
  from?: Array<IStage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ILinkWhereUniqueInput;
};


export type IMutationScheduleUnpublishRocketArgs = {
  from?: Array<IStage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: IRocketWhereUniqueInput;
};


export type IMutationUnpublishAssetArgs = {
  from?: Array<IStage>;
  locales?: InputMaybe<Array<ILocale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: IAssetWhereUniqueInput;
};


export type IMutationUnpublishLaunchArgs = {
  from?: Array<IStage>;
  where: ILaunchWhereUniqueInput;
};


export type IMutationUnpublishLaunchSiteArgs = {
  from?: Array<IStage>;
  where: ILaunchSiteWhereUniqueInput;
};


export type IMutationUnpublishLinkArgs = {
  from?: Array<IStage>;
  where: ILinkWhereUniqueInput;
};


export type IMutationUnpublishManyAssetsArgs = {
  from?: Array<IStage>;
  locales?: InputMaybe<Array<ILocale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IAssetManyWhereInput>;
};


export type IMutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<IStage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IAssetManyWhereInput>;
};


export type IMutationUnpublishManyLaunchSitesArgs = {
  from?: Array<IStage>;
  where?: InputMaybe<ILaunchSiteManyWhereInput>;
};


export type IMutationUnpublishManyLaunchSitesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<IStage>;
  where?: InputMaybe<ILaunchSiteManyWhereInput>;
};


export type IMutationUnpublishManyLaunchesArgs = {
  from?: Array<IStage>;
  where?: InputMaybe<ILaunchManyWhereInput>;
};


export type IMutationUnpublishManyLaunchesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<IStage>;
  where?: InputMaybe<ILaunchManyWhereInput>;
};


export type IMutationUnpublishManyLinksArgs = {
  from?: Array<IStage>;
  where?: InputMaybe<ILinkManyWhereInput>;
};


export type IMutationUnpublishManyLinksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<IStage>;
  where?: InputMaybe<ILinkManyWhereInput>;
};


export type IMutationUnpublishManyRocketsArgs = {
  from?: Array<IStage>;
  where?: InputMaybe<IRocketManyWhereInput>;
};


export type IMutationUnpublishManyRocketsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<IStage>;
  where?: InputMaybe<IRocketManyWhereInput>;
};


export type IMutationUnpublishRocketArgs = {
  from?: Array<IStage>;
  where: IRocketWhereUniqueInput;
};


export type IMutationUpdateAssetArgs = {
  data: IAssetUpdateInput;
  where: IAssetWhereUniqueInput;
};


export type IMutationUpdateLaunchArgs = {
  data: ILaunchUpdateInput;
  where: ILaunchWhereUniqueInput;
};


export type IMutationUpdateLaunchSiteArgs = {
  data: ILaunchSiteUpdateInput;
  where: ILaunchSiteWhereUniqueInput;
};


export type IMutationUpdateLinkArgs = {
  data: ILinkUpdateInput;
  where: ILinkWhereUniqueInput;
};


export type IMutationUpdateManyAssetsArgs = {
  data: IAssetUpdateManyInput;
  where?: InputMaybe<IAssetManyWhereInput>;
};


export type IMutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: IAssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAssetManyWhereInput>;
};


export type IMutationUpdateManyLaunchSitesArgs = {
  data: ILaunchSiteUpdateManyInput;
  where?: InputMaybe<ILaunchSiteManyWhereInput>;
};


export type IMutationUpdateManyLaunchSitesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ILaunchSiteUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ILaunchSiteManyWhereInput>;
};


export type IMutationUpdateManyLaunchesArgs = {
  data: ILaunchUpdateManyInput;
  where?: InputMaybe<ILaunchManyWhereInput>;
};


export type IMutationUpdateManyLaunchesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ILaunchUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ILaunchManyWhereInput>;
};


export type IMutationUpdateManyLinksArgs = {
  data: ILinkUpdateManyInput;
  where?: InputMaybe<ILinkManyWhereInput>;
};


export type IMutationUpdateManyLinksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ILinkUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ILinkManyWhereInput>;
};


export type IMutationUpdateManyRocketsArgs = {
  data: IRocketUpdateManyInput;
  where?: InputMaybe<IRocketManyWhereInput>;
};


export type IMutationUpdateManyRocketsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: IRocketUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IRocketManyWhereInput>;
};


export type IMutationUpdateRocketArgs = {
  data: IRocketUpdateInput;
  where: IRocketWhereUniqueInput;
};


export type IMutationUpdateScheduledReleaseArgs = {
  data: IScheduledReleaseUpdateInput;
  where: IScheduledReleaseWhereUniqueInput;
};


export type IMutationUpsertAssetArgs = {
  upsert: IAssetUpsertInput;
  where: IAssetWhereUniqueInput;
};


export type IMutationUpsertLaunchArgs = {
  upsert: ILaunchUpsertInput;
  where: ILaunchWhereUniqueInput;
};


export type IMutationUpsertLaunchSiteArgs = {
  upsert: ILaunchSiteUpsertInput;
  where: ILaunchSiteWhereUniqueInput;
};


export type IMutationUpsertLinkArgs = {
  upsert: ILinkUpsertInput;
  where: ILinkWhereUniqueInput;
};


export type IMutationUpsertRocketArgs = {
  upsert: IRocketUpsertInput;
  where: IRocketWhereUniqueInput;
};

/** An object with an ID */
export type INode = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: IStage;
};

/** Information about pagination in a connection. */
export type IPageInfo = {
  __typename: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type IPublishLocaleInput = {
  /** Locales to publish */
  locale: ILocale;
  /** Stages to publish selected locales to */
  stages: Array<IStage>;
};

export type IQuery = {
  __typename: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<IAsset>;
  /** Retrieve document version */
  assetVersion?: Maybe<IDocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<IAsset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: IAssetConnection;
  /** Retrieve a single launch */
  launch?: Maybe<ILaunch>;
  /** Retrieve a single launchSite */
  launchSite?: Maybe<ILaunchSite>;
  /** Retrieve document version */
  launchSiteVersion?: Maybe<IDocumentVersion>;
  /** Retrieve multiple launchSites */
  launchSites: Array<ILaunchSite>;
  /** Retrieve multiple launchSites using the Relay connection interface */
  launchSitesConnection: ILaunchSiteConnection;
  /** Retrieve document version */
  launchVersion?: Maybe<IDocumentVersion>;
  /** Retrieve multiple launches */
  launches: Array<ILaunch>;
  /** Retrieve multiple launches using the Relay connection interface */
  launchesConnection: ILaunchConnection;
  /** Retrieve a single link */
  link?: Maybe<ILink>;
  /** Retrieve document version */
  linkVersion?: Maybe<IDocumentVersion>;
  /** Retrieve multiple links */
  links: Array<ILink>;
  /** Retrieve multiple links using the Relay connection interface */
  linksConnection: ILinkConnection;
  /** Fetches an object given its ID */
  node?: Maybe<INode>;
  /** Retrieve a single rocket */
  rocket?: Maybe<IRocket>;
  /** Retrieve document version */
  rocketVersion?: Maybe<IDocumentVersion>;
  /** Retrieve multiple rockets */
  rockets: Array<IRocket>;
  /** Retrieve multiple rockets using the Relay connection interface */
  rocketsConnection: IRocketConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<IScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<IScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: IScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<IScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<IScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: IScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<IUser>;
  /** Retrieve multiple users */
  users: Array<IUser>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: IUserConnection;
};


export type IQueryAssetArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IAssetWhereUniqueInput;
};


export type IQueryAssetVersionArgs = {
  where: IVersionWhereInput;
};


export type IQueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IAssetWhereInput>;
};


export type IQueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IAssetWhereInput>;
};


export type IQueryLaunchArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: ILaunchWhereUniqueInput;
};


export type IQueryLaunchSiteArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: ILaunchSiteWhereUniqueInput;
};


export type IQueryLaunchSiteVersionArgs = {
  where: IVersionWhereInput;
};


export type IQueryLaunchSitesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<ILaunchSiteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<ILaunchSiteWhereInput>;
};


export type IQueryLaunchSitesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<ILaunchSiteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<ILaunchSiteWhereInput>;
};


export type IQueryLaunchVersionArgs = {
  where: IVersionWhereInput;
};


export type IQueryLaunchesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<ILaunchOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<ILaunchWhereInput>;
};


export type IQueryLaunchesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<ILaunchOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<ILaunchWhereInput>;
};


export type IQueryLinkArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: ILinkWhereUniqueInput;
};


export type IQueryLinkVersionArgs = {
  where: IVersionWhereInput;
};


export type IQueryLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<ILinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<ILinkWhereInput>;
};


export type IQueryLinksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<ILinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<ILinkWhereInput>;
};


export type IQueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<ILocale>;
  stage?: IStage;
};


export type IQueryRocketArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IRocketWhereUniqueInput;
};


export type IQueryRocketVersionArgs = {
  where: IVersionWhereInput;
};


export type IQueryRocketsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IRocketOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IRocketWhereInput>;
};


export type IQueryRocketsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IRocketOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IRocketWhereInput>;
};


export type IQueryScheduledOperationArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IScheduledOperationWhereUniqueInput;
};


export type IQueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IScheduledOperationWhereInput>;
};


export type IQueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IScheduledOperationWhereInput>;
};


export type IQueryScheduledReleaseArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IScheduledReleaseWhereUniqueInput;
};


export type IQueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IScheduledReleaseWhereInput>;
};


export type IQueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IScheduledReleaseWhereInput>;
};


export type IQueryUserArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IUserWhereUniqueInput;
};


export type IQueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IUserWhereInput>;
};


export type IQueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IUserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type IRgba = {
  __typename: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type IRgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type IRichText = {
  __typename: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type IRocket = INode & {
  __typename: 'Rocket';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<IRocket>;
  /** List of Rocket versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<IAsset>;
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  /** System stage field */
  stage: IStage;
  type: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
};


export type IRocketCreatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


export type IRocketDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


export type IRocketHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<IStage>;
};


export type IRocketImageArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


export type IRocketPublishedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


export type IRocketScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
};


export type IRocketUpdatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};

export type IRocketConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IRocketWhereUniqueInput;
};

/** A connection to a list of items. */
export type IRocketConnection = {
  __typename: 'RocketConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IRocketEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type IRocketCreateInput = {
  cksg4nbqs0b0901xl90ukb37x?: InputMaybe<ILaunchCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<IAssetCreateOneInlineInput>;
  name: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IRocketCreateManyInlineInput = {
  /** Connect multiple existing Rocket documents */
  connect?: InputMaybe<Array<IRocketWhereUniqueInput>>;
  /** Create and connect multiple existing Rocket documents */
  create?: InputMaybe<Array<IRocketCreateInput>>;
};

export type IRocketCreateOneInlineInput = {
  /** Connect one existing Rocket document */
  connect?: InputMaybe<IRocketWhereUniqueInput>;
  /** Create and connect one Rocket document */
  create?: InputMaybe<IRocketCreateInput>;
};

/** An edge in a connection. */
export type IRocketEdge = {
  __typename: 'RocketEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IRocket;
};

/** Identifies documents */
export type IRocketManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IRocketWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IRocketWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IRocketWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<IAssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  type?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  type_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  type_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  type_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  type_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  type_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
};

export enum IRocketOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type IRocketUpdateInput = {
  cksg4nbqs0b0901xl90ukb37x?: InputMaybe<ILaunchUpdateManyInlineInput>;
  image?: InputMaybe<IAssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type IRocketUpdateManyInlineInput = {
  /** Connect multiple existing Rocket documents */
  connect?: InputMaybe<Array<IRocketConnectInput>>;
  /** Create and connect multiple Rocket documents */
  create?: InputMaybe<Array<IRocketCreateInput>>;
  /** Delete multiple Rocket documents */
  delete?: InputMaybe<Array<IRocketWhereUniqueInput>>;
  /** Disconnect multiple Rocket documents */
  disconnect?: InputMaybe<Array<IRocketWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Rocket documents */
  set?: InputMaybe<Array<IRocketWhereUniqueInput>>;
  /** Update multiple Rocket documents */
  update?: InputMaybe<Array<IRocketUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Rocket documents */
  upsert?: InputMaybe<Array<IRocketUpsertWithNestedWhereUniqueInput>>;
};

export type IRocketUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type IRocketUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: IRocketUpdateManyInput;
  /** Document search */
  where: IRocketWhereInput;
};

export type IRocketUpdateOneInlineInput = {
  /** Connect existing Rocket document */
  connect?: InputMaybe<IRocketWhereUniqueInput>;
  /** Create and connect one Rocket document */
  create?: InputMaybe<IRocketCreateInput>;
  /** Delete currently connected Rocket document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Rocket document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Rocket document */
  update?: InputMaybe<IRocketUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Rocket document */
  upsert?: InputMaybe<IRocketUpsertWithNestedWhereUniqueInput>;
};

export type IRocketUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: IRocketUpdateInput;
  /** Unique document search */
  where: IRocketWhereUniqueInput;
};

export type IRocketUpsertInput = {
  /** Create document if it didn't exist */
  create: IRocketCreateInput;
  /** Update document if it exists */
  update: IRocketUpdateInput;
};

export type IRocketUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: IRocketUpsertInput;
  /** Unique document search */
  where: IRocketWhereUniqueInput;
};

/** Identifies documents */
export type IRocketWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IRocketWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IRocketWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IRocketWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<IAssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  type?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  type_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  type_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  type_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  type_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  type_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
};

/** References Rocket record uniquely */
export type IRocketWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Operation system model */
export type IScheduledOperation = INode & {
  __typename: 'ScheduledOperation';
  affectedDocuments: Array<IScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<IScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<IScheduledRelease>;
  /** System stage field */
  stage: IStage;
  /** operation Status */
  status: IScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
};


/** Scheduled Operation system model */
export type IScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type IScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


/** Scheduled Operation system model */
export type IScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


/** Scheduled Operation system model */
export type IScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


/** Scheduled Operation system model */
export type IScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


/** Scheduled Operation system model */
export type IScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};

export type IScheduledOperationAffectedDocument = IAsset | ILaunch | ILaunchSite | ILink | IRocket;

export type IScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type IScheduledOperationConnection = {
  __typename: 'ScheduledOperationConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type IScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<IScheduledOperationWhereUniqueInput>>;
};

export type IScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<IScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type IScheduledOperationEdge = {
  __typename: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IScheduledOperation;
};

/** Identifies documents */
export type IScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  release?: InputMaybe<IScheduledReleaseWhereInput>;
  status?: InputMaybe<IScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<IScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<IScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<IScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
};

export enum IScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum IScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type IScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<IScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<IScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<IScheduledOperationWhereUniqueInput>>;
};

export type IScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<IScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type IScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  release?: InputMaybe<IScheduledReleaseWhereInput>;
  status?: InputMaybe<IScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<IScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<IScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<IScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type IScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type IScheduledRelease = INode & {
  __typename: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<IScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<IScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: IStage;
  /** Release Status */
  status: IScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
};


/** Scheduled Release system model */
export type IScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


/** Scheduled Release system model */
export type IScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


/** Scheduled Release system model */
export type IScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  orderBy?: InputMaybe<IScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type IScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};


/** Scheduled Release system model */
export type IScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<ILocale>>;
};

export type IScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type IScheduledReleaseConnection = {
  __typename: 'ScheduledReleaseConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type IScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<IScheduledReleaseCreateInput>>;
};

export type IScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<IScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<IScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type IScheduledReleaseEdge = {
  __typename: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IScheduledRelease;
};

/** Identifies documents */
export type IScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<IScheduledOperationWhereInput>;
  operations_none?: InputMaybe<IScheduledOperationWhereInput>;
  operations_some?: InputMaybe<IScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<IScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<IScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<IScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<IScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
};

export enum IScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum IScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type IScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<IScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<IScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<IScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<IScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type IScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: IScheduledReleaseUpdateManyInput;
  /** Document search */
  where: IScheduledReleaseWhereInput;
};

export type IScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<IScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<IScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<IScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<IScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type IScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: IScheduledReleaseUpdateInput;
  /** Unique document search */
  where: IScheduledReleaseWhereUniqueInput;
};

export type IScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: IScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: IScheduledReleaseUpdateInput;
};

export type IScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: IScheduledReleaseUpsertInput;
  /** Unique document search */
  where: IScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type IScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<IScheduledOperationWhereInput>;
  operations_none?: InputMaybe<IScheduledOperationWhereInput>;
  operations_some?: InputMaybe<IScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<IScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<IScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<IScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<IScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type IScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum IStage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum ISystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type IUnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: ILocale;
  /** Stages to unpublish selected locales from */
  stages: Array<IStage>;
};

/** User system model */
export type IUser = INode & {
  __typename: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<IUser>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: IUserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: IStage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type IUserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};

export type IUserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IUserWhereUniqueInput;
};

/** A connection to a list of items. */
export type IUserConnection = {
  __typename: 'UserConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IUserEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type IUserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<IUserWhereUniqueInput>>;
};

export type IUserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<IUserWhereUniqueInput>;
};

/** An edge in a connection. */
export type IUserEdge = {
  __typename: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IUser;
};

/** System User Kind */
export enum IUserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type IUserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<IUserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<IUserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<IUserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<IUserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum IUserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type IUserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<IUserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<IUserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<IUserWhereUniqueInput>>;
};

export type IUserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<IUserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type IUserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<IUserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<IUserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<IUserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<IUserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type IUserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type IVersion = {
  __typename: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: IStage;
};

export type IVersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: IStage;
};

export enum I_FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum I_MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum I_MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum I_OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum I_RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum I_RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum I_RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum I_SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type ILaunchQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ILaunchQuery = { __typename: 'Query', launch?: { __typename: 'Launch', id: string, name: string, date: any, launchSuccess?: boolean, launchSite?: { __typename: 'LaunchSite', id: string, longName: string, name: string }, rocket?: { __typename: 'Rocket', id: string, name: string, type: string, image?: { __typename: 'Asset', url: string } } } };

export type ILaunchesQueryVariables = Exact<{ [key: string]: never; }>;


export type ILaunchesQuery = { __typename: 'Query', launches: Array<{ __typename: 'Launch', id: string, name: string, slug?: string, date: any, launchSite?: { __typename: 'LaunchSite', id: string, name: string }, rocket?: { __typename: 'Rocket', id: string, name: string, type: string } }> };


export const LaunchDocument = gql`
  query Launch($id: ID!) {
    launch(where: {id: $id}) {
      id
      name
      date
      launchSite {
        id
        longName
        name
      }
      launchSuccess
      rocket {
        id
        name
        type
        image {
          url
        }
      }
    }
  }
`

/**
 * __useLaunchQuery__
 *
 * To run a query within a Vue component, call `useLaunchQuery` and pass it any options that fit your needs.
 * When your component renders, `useLaunchQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useLaunchQuery({
 *   id: // value for 'id'
 * });
 */
export function useLaunchQuery (variables: ILaunchQueryVariables | VueCompositionApi.Ref<ILaunchQueryVariables> | ReactiveFunction<ILaunchQueryVariables>, options: VueApolloComposable.UseQueryOptions<ILaunchQuery, ILaunchQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ILaunchQuery, ILaunchQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ILaunchQuery, ILaunchQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ILaunchQuery, ILaunchQueryVariables>(LaunchDocument, variables, options)
}

export type LaunchQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ILaunchQuery, ILaunchQueryVariables>;
export const LaunchesDocument = gql`
  query Launches {
    launches(orderBy: date_DESC) {
      id
      name
      slug
      date
      launchSite {
        id
        name
      }
      rocket {
        id
        name
        type
      }
    }
  }
`

/**
 * __useLaunchesQuery__
 *
 * To run a query within a Vue component, call `useLaunchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLaunchesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useLaunchesQuery();
 */
export function useLaunchesQuery (options: VueApolloComposable.UseQueryOptions<ILaunchesQuery, ILaunchesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ILaunchesQuery, ILaunchesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ILaunchesQuery, ILaunchesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ILaunchesQuery, ILaunchesQueryVariables>(LaunchesDocument, {}, options)
}

export type LaunchesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ILaunchesQuery, ILaunchesQueryVariables>;
