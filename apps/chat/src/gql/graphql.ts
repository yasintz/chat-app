/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamp: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** An object with globally unique ID */
export type Node = {
  /** A globally unique identifier */
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "app" */
export type App = Node & {
  __typename?: 'app';
  /** An array relationship */
  channels: Array<Channel>;
  /** An aggregate relationship */
  channels_aggregate: Channel_Aggregate;
  /** An array relationship connection */
  channels_connection: ChannelConnection;
  /** An array relationship */
  customers: Array<Customer>;
  /** An aggregate relationship */
  customers_aggregate: Customer_Aggregate;
  /** An array relationship connection */
  customers_connection: CustomerConnection;
  id: Scalars['ID'];
  jwtSecrets?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  members: Array<Member>;
  /** An aggregate relationship */
  members_aggregate: Member_Aggregate;
  /** An array relationship connection */
  members_connection: MemberConnection;
  name: Scalars['String'];
};


/** columns and relationships of "app" */
export type AppChannelsArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


/** columns and relationships of "app" */
export type AppChannels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


/** columns and relationships of "app" */
export type AppChannels_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


/** columns and relationships of "app" */
export type AppCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


/** columns and relationships of "app" */
export type AppCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


/** columns and relationships of "app" */
export type AppCustomers_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


/** columns and relationships of "app" */
export type AppJwtSecretsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "app" */
export type AppMembersArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "app" */
export type AppMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "app" */
export type AppMembers_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};

/** A Relay connection object on "app" */
export type AppConnection = {
  __typename?: 'appConnection';
  edges: Array<AppEdge>;
  pageInfo: PageInfo;
};

export type AppEdge = {
  __typename?: 'appEdge';
  cursor: Scalars['String'];
  node: App;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type App_Append_Input = {
  jwtSecrets?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "app". All fields are combined with a logical 'AND'. */
export type App_Bool_Exp = {
  _and?: InputMaybe<Array<App_Bool_Exp>>;
  _not?: InputMaybe<App_Bool_Exp>;
  _or?: InputMaybe<Array<App_Bool_Exp>>;
  channels?: InputMaybe<Channel_Bool_Exp>;
  channels_aggregate?: InputMaybe<Channel_Aggregate_Bool_Exp>;
  customers?: InputMaybe<Customer_Bool_Exp>;
  customers_aggregate?: InputMaybe<Customer_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  jwtSecrets?: InputMaybe<Jsonb_Comparison_Exp>;
  members?: InputMaybe<Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Member_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app" */
export enum App_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppPkey = 'app_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type App_Delete_At_Path_Input = {
  jwtSecrets?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type App_Delete_Elem_Input = {
  jwtSecrets?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type App_Delete_Key_Input = {
  jwtSecrets?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "app" */
export type App_Insert_Input = {
  channels?: InputMaybe<Channel_Arr_Rel_Insert_Input>;
  customers?: InputMaybe<Customer_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  jwtSecrets?: InputMaybe<Scalars['jsonb']>;
  members?: InputMaybe<Member_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "app" */
export type App_Mutation_Response = {
  __typename?: 'app_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App>;
};

/** input type for inserting object relation for remote table "app" */
export type App_Obj_Rel_Insert_Input = {
  data: App_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<App_On_Conflict>;
};

/** on_conflict condition type for table "app" */
export type App_On_Conflict = {
  constraint: App_Constraint;
  update_columns?: Array<App_Update_Column>;
  where?: InputMaybe<App_Bool_Exp>;
};

/** Ordering options when selecting data from "app". */
export type App_Order_By = {
  channels_aggregate?: InputMaybe<Channel_Aggregate_Order_By>;
  customers_aggregate?: InputMaybe<Customer_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  jwtSecrets?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Member_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app */
export type App_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type App_Prepend_Input = {
  jwtSecrets?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "app" */
export enum App_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  JwtSecrets = 'jwtSecrets',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "app" */
export type App_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  jwtSecrets?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app" */
export enum App_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  JwtSecrets = 'jwtSecrets',
  /** column name */
  Name = 'name'
}

export type App_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<App_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<App_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<App_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<App_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<App_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Set_Input>;
  where: App_Bool_Exp;
};

/** columns and relationships of "channel" */
export type Channel = Node & {
  __typename?: 'channel';
  /** An object relationship */
  app: App;
  appId: Scalars['uuid'];
  createdAt: Scalars['timestamp'];
  deletedAt?: Maybe<Scalars['timestamp']>;
  id: Scalars['ID'];
  /** An array relationship */
  members: Array<Member_Channel>;
  /** An aggregate relationship */
  members_aggregate: Member_Channel_Aggregate;
  /** An array relationship connection */
  members_connection: Member_ChannelConnection;
  /** An array relationship */
  messages: Array<Message>;
  /** An aggregate relationship */
  messages_aggregate: Message_Aggregate;
  /** An array relationship connection */
  messages_connection: MessageConnection;
  name: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "channel" */
export type ChannelMembersArgs = {
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


/** columns and relationships of "channel" */
export type ChannelMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


/** columns and relationships of "channel" */
export type ChannelMembers_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


/** columns and relationships of "channel" */
export type ChannelMessagesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "channel" */
export type ChannelMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "channel" */
export type ChannelMessages_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** A Relay connection object on "channel" */
export type ChannelConnection = {
  __typename?: 'channelConnection';
  edges: Array<ChannelEdge>;
  pageInfo: PageInfo;
};

export type ChannelEdge = {
  __typename?: 'channelEdge';
  cursor: Scalars['String'];
  node: Channel;
};

/** aggregated selection of "channel" */
export type Channel_Aggregate = {
  __typename?: 'channel_aggregate';
  aggregate?: Maybe<Channel_Aggregate_Fields>;
  nodes: Array<Channel>;
};

export type Channel_Aggregate_Bool_Exp = {
  count?: InputMaybe<Channel_Aggregate_Bool_Exp_Count>;
};

export type Channel_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Channel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Channel_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "channel" */
export type Channel_Aggregate_Fields = {
  __typename?: 'channel_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Channel_Max_Fields>;
  min?: Maybe<Channel_Min_Fields>;
};


/** aggregate fields of "channel" */
export type Channel_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Channel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "channel" */
export type Channel_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Channel_Max_Order_By>;
  min?: InputMaybe<Channel_Min_Order_By>;
};

/** input type for inserting array relation for remote table "channel" */
export type Channel_Arr_Rel_Insert_Input = {
  data: Array<Channel_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Channel_On_Conflict>;
};

/** Boolean expression to filter rows from the table "channel". All fields are combined with a logical 'AND'. */
export type Channel_Bool_Exp = {
  _and?: InputMaybe<Array<Channel_Bool_Exp>>;
  _not?: InputMaybe<Channel_Bool_Exp>;
  _or?: InputMaybe<Array<Channel_Bool_Exp>>;
  app?: InputMaybe<App_Bool_Exp>;
  appId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  members?: InputMaybe<Member_Channel_Bool_Exp>;
  members_aggregate?: InputMaybe<Member_Channel_Aggregate_Bool_Exp>;
  messages?: InputMaybe<Message_Bool_Exp>;
  messages_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel" */
export enum Channel_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChannelPkey = 'channel_pkey'
}

/** input type for inserting data into table "channel" */
export type Channel_Insert_Input = {
  app?: InputMaybe<App_Obj_Rel_Insert_Input>;
  appId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  members?: InputMaybe<Member_Channel_Arr_Rel_Insert_Input>;
  messages?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Channel_Max_Fields = {
  __typename?: 'channel_max_fields';
  appId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "channel" */
export type Channel_Max_Order_By = {
  appId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Min_Fields = {
  __typename?: 'channel_min_fields';
  appId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "channel" */
export type Channel_Min_Order_By = {
  appId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "channel" */
export type Channel_Mutation_Response = {
  __typename?: 'channel_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Channel>;
};

/** input type for inserting object relation for remote table "channel" */
export type Channel_Obj_Rel_Insert_Input = {
  data: Channel_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Channel_On_Conflict>;
};

/** on_conflict condition type for table "channel" */
export type Channel_On_Conflict = {
  constraint: Channel_Constraint;
  update_columns?: Array<Channel_Update_Column>;
  where?: InputMaybe<Channel_Bool_Exp>;
};

/** Ordering options when selecting data from "channel". */
export type Channel_Order_By = {
  app?: InputMaybe<App_Order_By>;
  appId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Member_Channel_Aggregate_Order_By>;
  messages_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: channel */
export type Channel_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "channel" */
export enum Channel_Select_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "channel" */
export type Channel_Set_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "channel" */
export enum Channel_Update_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Channel_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Channel_Set_Input>;
  where: Channel_Bool_Exp;
};

/** columns and relationships of "customer" */
export type Customer = Node & {
  __typename?: 'customer';
  /** An object relationship */
  app: App;
  appId: Scalars['uuid'];
  createdAt: Scalars['timestamp'];
  email: Scalars['String'];
  encryptedPassword?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  role: Customer_Role_Enum;
  updatedAt: Scalars['timestamp'];
};

/** A Relay connection object on "customer" */
export type CustomerConnection = {
  __typename?: 'customerConnection';
  edges: Array<CustomerEdge>;
  pageInfo: PageInfo;
};

export type CustomerEdge = {
  __typename?: 'customerEdge';
  cursor: Scalars['String'];
  node: Customer;
};

/** aggregated selection of "customer" */
export type Customer_Aggregate = {
  __typename?: 'customer_aggregate';
  aggregate?: Maybe<Customer_Aggregate_Fields>;
  nodes: Array<Customer>;
};

export type Customer_Aggregate_Bool_Exp = {
  count?: InputMaybe<Customer_Aggregate_Bool_Exp_Count>;
};

export type Customer_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Customer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Customer_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "customer" */
export type Customer_Aggregate_Fields = {
  __typename?: 'customer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customer_Max_Fields>;
  min?: Maybe<Customer_Min_Fields>;
};


/** aggregate fields of "customer" */
export type Customer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "customer" */
export type Customer_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Customer_Max_Order_By>;
  min?: InputMaybe<Customer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "customer" */
export type Customer_Arr_Rel_Insert_Input = {
  data: Array<Customer_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Customer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export type Customer_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Bool_Exp>>;
  _not?: InputMaybe<Customer_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Bool_Exp>>;
  app?: InputMaybe<App_Bool_Exp>;
  appId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  encryptedPassword?: InputMaybe<String_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Customer_Role_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer" */
export enum Customer_Constraint {
  /** unique or primary key constraint on columns "email" */
  CustomerEmailKey = 'customer_email_key',
  /** unique or primary key constraint on columns "id" */
  CustomerPkey = 'customer_pkey'
}

/** input type for inserting data into table "customer" */
export type Customer_Insert_Input = {
  app?: InputMaybe<App_Obj_Rel_Insert_Input>;
  appId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  encryptedPassword?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Customer_Role_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Customer_Max_Fields = {
  __typename?: 'customer_max_fields';
  appId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  encryptedPassword?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "customer" */
export type Customer_Max_Order_By = {
  appId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  encryptedPassword?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Customer_Min_Fields = {
  __typename?: 'customer_min_fields';
  appId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  encryptedPassword?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "customer" */
export type Customer_Min_Order_By = {
  appId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  encryptedPassword?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "customer" */
export type Customer_Mutation_Response = {
  __typename?: 'customer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer>;
};

/** on_conflict condition type for table "customer" */
export type Customer_On_Conflict = {
  constraint: Customer_Constraint;
  update_columns?: Array<Customer_Update_Column>;
  where?: InputMaybe<Customer_Bool_Exp>;
};

/** Ordering options when selecting data from "customer". */
export type Customer_Order_By = {
  app?: InputMaybe<App_Order_By>;
  appId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  encryptedPassword?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customer */
export type Customer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "customer_role" */
export type Customer_Role = Node & {
  __typename?: 'customer_role';
  id: Scalars['ID'];
  value: Scalars['String'];
};

/** A Relay connection object on "customer_role" */
export type Customer_RoleConnection = {
  __typename?: 'customer_roleConnection';
  edges: Array<Customer_RoleEdge>;
  pageInfo: PageInfo;
};

export type Customer_RoleEdge = {
  __typename?: 'customer_roleEdge';
  cursor: Scalars['String'];
  node: Customer_Role;
};

/** Boolean expression to filter rows from the table "customer_role". All fields are combined with a logical 'AND'. */
export type Customer_Role_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Role_Bool_Exp>>;
  _not?: InputMaybe<Customer_Role_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Role_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer_role" */
export enum Customer_Role_Constraint {
  /** unique or primary key constraint on columns "value" */
  CustomerRolePkey = 'customer_role_pkey'
}

export enum Customer_Role_Enum {
  Admin = 'admin',
  Owner = 'owner'
}

/** Boolean expression to compare columns of type "customer_role_enum". All fields are combined with logical 'AND'. */
export type Customer_Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Customer_Role_Enum>;
  _in?: InputMaybe<Array<Customer_Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Customer_Role_Enum>;
  _nin?: InputMaybe<Array<Customer_Role_Enum>>;
};

/** input type for inserting data into table "customer_role" */
export type Customer_Role_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "customer_role" */
export type Customer_Role_Mutation_Response = {
  __typename?: 'customer_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer_Role>;
};

/** on_conflict condition type for table "customer_role" */
export type Customer_Role_On_Conflict = {
  constraint: Customer_Role_Constraint;
  update_columns?: Array<Customer_Role_Update_Column>;
  where?: InputMaybe<Customer_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "customer_role". */
export type Customer_Role_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customer_role */
export type Customer_Role_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "customer_role" */
export enum Customer_Role_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "customer_role" */
export type Customer_Role_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "customer_role" */
export enum Customer_Role_Update_Column {
  /** column name */
  Value = 'value'
}

export type Customer_Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customer_Role_Set_Input>;
  where: Customer_Role_Bool_Exp;
};

/** select columns of table "customer" */
export enum Customer_Select_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  EncryptedPassword = 'encryptedPassword',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "customer" */
export type Customer_Set_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  encryptedPassword?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Customer_Role_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "customer" */
export enum Customer_Update_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  EncryptedPassword = 'encryptedPassword',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Customer_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customer_Set_Input>;
  where: Customer_Bool_Exp;
};

/** columns and relationships of "file" */
export type File = Node & {
  __typename?: 'file';
  createdAt: Scalars['timestamp'];
  deletedAt?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  file_service: File_Service;
  id: Scalars['ID'];
  /** An array relationship */
  member_files: Array<Member_File>;
  /** An aggregate relationship */
  member_files_aggregate: Member_File_Aggregate;
  /** An array relationship connection */
  member_files_connection: Member_FileConnection;
  /** An array relationship */
  message_files: Array<Message_File>;
  /** An aggregate relationship */
  message_files_aggregate: Message_File_Aggregate;
  /** An array relationship connection */
  message_files_connection: Message_FileConnection;
  name: Scalars['String'];
  path: Scalars['String'];
  service: File_Service_Enum;
  type: File_Type_Enum;
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "file" */
export type FileMember_FilesArgs = {
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


/** columns and relationships of "file" */
export type FileMember_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


/** columns and relationships of "file" */
export type FileMember_Files_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


/** columns and relationships of "file" */
export type FileMessage_FilesArgs = {
  distinct_on?: InputMaybe<Array<Message_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_File_Order_By>>;
  where?: InputMaybe<Message_File_Bool_Exp>;
};


/** columns and relationships of "file" */
export type FileMessage_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_File_Order_By>>;
  where?: InputMaybe<Message_File_Bool_Exp>;
};


/** columns and relationships of "file" */
export type FileMessage_Files_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_File_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_File_Order_By>>;
  where?: InputMaybe<Message_File_Bool_Exp>;
};

/** A Relay connection object on "file" */
export type FileConnection = {
  __typename?: 'fileConnection';
  edges: Array<FileEdge>;
  pageInfo: PageInfo;
};

export type FileEdge = {
  __typename?: 'fileEdge';
  cursor: Scalars['String'];
  node: File;
};

/** Boolean expression to filter rows from the table "file". All fields are combined with a logical 'AND'. */
export type File_Bool_Exp = {
  _and?: InputMaybe<Array<File_Bool_Exp>>;
  _not?: InputMaybe<File_Bool_Exp>;
  _or?: InputMaybe<Array<File_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  file_service?: InputMaybe<File_Service_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member_files?: InputMaybe<Member_File_Bool_Exp>;
  member_files_aggregate?: InputMaybe<Member_File_Aggregate_Bool_Exp>;
  message_files?: InputMaybe<Message_File_Bool_Exp>;
  message_files_aggregate?: InputMaybe<Message_File_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  service?: InputMaybe<File_Service_Enum_Comparison_Exp>;
  type?: InputMaybe<File_Type_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "file" */
export enum File_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilePkey = 'file_pkey'
}

/** input type for inserting data into table "file" */
export type File_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  file_service?: InputMaybe<File_Service_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  member_files?: InputMaybe<Member_File_Arr_Rel_Insert_Input>;
  message_files?: InputMaybe<Message_File_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<File_Service_Enum>;
  type?: InputMaybe<File_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "file" */
export type File_Mutation_Response = {
  __typename?: 'file_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<File>;
};

/** input type for inserting object relation for remote table "file" */
export type File_Obj_Rel_Insert_Input = {
  data: File_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<File_On_Conflict>;
};

/** on_conflict condition type for table "file" */
export type File_On_Conflict = {
  constraint: File_Constraint;
  update_columns?: Array<File_Update_Column>;
  where?: InputMaybe<File_Bool_Exp>;
};

/** Ordering options when selecting data from "file". */
export type File_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  file_service?: InputMaybe<File_Service_Order_By>;
  id?: InputMaybe<Order_By>;
  member_files_aggregate?: InputMaybe<Member_File_Aggregate_Order_By>;
  message_files_aggregate?: InputMaybe<Message_File_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: file */
export type File_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "file" */
export enum File_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Path = 'path',
  /** column name */
  Service = 'service',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "file_service" */
export type File_Service = Node & {
  __typename?: 'file_service';
  id: Scalars['ID'];
  value: Scalars['String'];
};

/** A Relay connection object on "file_service" */
export type File_ServiceConnection = {
  __typename?: 'file_serviceConnection';
  edges: Array<File_ServiceEdge>;
  pageInfo: PageInfo;
};

export type File_ServiceEdge = {
  __typename?: 'file_serviceEdge';
  cursor: Scalars['String'];
  node: File_Service;
};

/** Boolean expression to filter rows from the table "file_service". All fields are combined with a logical 'AND'. */
export type File_Service_Bool_Exp = {
  _and?: InputMaybe<Array<File_Service_Bool_Exp>>;
  _not?: InputMaybe<File_Service_Bool_Exp>;
  _or?: InputMaybe<Array<File_Service_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "file_service" */
export enum File_Service_Constraint {
  /** unique or primary key constraint on columns "value" */
  FileServicePkey = 'file_service_pkey'
}

export enum File_Service_Enum {
  Cloudinary = 'cloudinary',
  Url = 'url'
}

/** Boolean expression to compare columns of type "file_service_enum". All fields are combined with logical 'AND'. */
export type File_Service_Enum_Comparison_Exp = {
  _eq?: InputMaybe<File_Service_Enum>;
  _in?: InputMaybe<Array<File_Service_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<File_Service_Enum>;
  _nin?: InputMaybe<Array<File_Service_Enum>>;
};

/** input type for inserting data into table "file_service" */
export type File_Service_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "file_service" */
export type File_Service_Mutation_Response = {
  __typename?: 'file_service_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<File_Service>;
};

/** input type for inserting object relation for remote table "file_service" */
export type File_Service_Obj_Rel_Insert_Input = {
  data: File_Service_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<File_Service_On_Conflict>;
};

/** on_conflict condition type for table "file_service" */
export type File_Service_On_Conflict = {
  constraint: File_Service_Constraint;
  update_columns?: Array<File_Service_Update_Column>;
  where?: InputMaybe<File_Service_Bool_Exp>;
};

/** Ordering options when selecting data from "file_service". */
export type File_Service_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: file_service */
export type File_Service_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "file_service" */
export enum File_Service_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "file_service" */
export type File_Service_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "file_service" */
export enum File_Service_Update_Column {
  /** column name */
  Value = 'value'
}

export type File_Service_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<File_Service_Set_Input>;
  where: File_Service_Bool_Exp;
};

/** input type for updating data in table "file" */
export type File_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<File_Service_Enum>;
  type?: InputMaybe<File_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** columns and relationships of "file_type" */
export type File_Type = Node & {
  __typename?: 'file_type';
  id: Scalars['ID'];
  value: Scalars['String'];
};

/** A Relay connection object on "file_type" */
export type File_TypeConnection = {
  __typename?: 'file_typeConnection';
  edges: Array<File_TypeEdge>;
  pageInfo: PageInfo;
};

export type File_TypeEdge = {
  __typename?: 'file_typeEdge';
  cursor: Scalars['String'];
  node: File_Type;
};

/** Boolean expression to filter rows from the table "file_type". All fields are combined with a logical 'AND'. */
export type File_Type_Bool_Exp = {
  _and?: InputMaybe<Array<File_Type_Bool_Exp>>;
  _not?: InputMaybe<File_Type_Bool_Exp>;
  _or?: InputMaybe<Array<File_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "file_type" */
export enum File_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  FileTypePkey = 'file_type_pkey'
}

export enum File_Type_Enum {
  Jpg = 'jpg',
  Mp4 = 'mp4',
  Png = 'png'
}

/** Boolean expression to compare columns of type "file_type_enum". All fields are combined with logical 'AND'. */
export type File_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<File_Type_Enum>;
  _in?: InputMaybe<Array<File_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<File_Type_Enum>;
  _nin?: InputMaybe<Array<File_Type_Enum>>;
};

/** input type for inserting data into table "file_type" */
export type File_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "file_type" */
export type File_Type_Mutation_Response = {
  __typename?: 'file_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<File_Type>;
};

/** on_conflict condition type for table "file_type" */
export type File_Type_On_Conflict = {
  constraint: File_Type_Constraint;
  update_columns?: Array<File_Type_Update_Column>;
  where?: InputMaybe<File_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "file_type". */
export type File_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: file_type */
export type File_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "file_type" */
export enum File_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "file_type" */
export type File_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "file_type" */
export enum File_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type File_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<File_Type_Set_Input>;
  where: File_Type_Bool_Exp;
};

/** update columns of table "file" */
export enum File_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Path = 'path',
  /** column name */
  Service = 'service',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type File_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<File_Set_Input>;
  where: File_Bool_Exp;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "member" */
export type Member = Node & {
  __typename?: 'member';
  activeAt?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  app: App;
  appId: Scalars['uuid'];
  /** An object relationship */
  avatarFile?: Maybe<File>;
  avatarFileId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  channels: Array<Member_Channel>;
  /** An aggregate relationship */
  channels_aggregate: Member_Channel_Aggregate;
  /** An array relationship connection */
  channels_connection: Member_ChannelConnection;
  createdAt: Scalars['timestamp'];
  deletedAt?: Maybe<Scalars['timestamp']>;
  encryptedPassword?: Maybe<Scalars['String']>;
  externalId: Scalars['String'];
  /** An array relationship */
  files: Array<Member_File>;
  /** An aggregate relationship */
  files_aggregate: Member_File_Aggregate;
  /** An array relationship connection */
  files_connection: Member_FileConnection;
  id: Scalars['ID'];
  /** An array relationship */
  message_reactions: Array<Message_Reaction>;
  /** An aggregate relationship */
  message_reactions_aggregate: Message_Reaction_Aggregate;
  /** An array relationship connection */
  message_reactions_connection: Message_ReactionConnection;
  /** An array relationship */
  messages: Array<Message>;
  /** An aggregate relationship */
  messages_aggregate: Message_Aggregate;
  /** An array relationship connection */
  messages_connection: MessageConnection;
  name: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "member" */
export type MemberChannelsArgs = {
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberChannels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberChannels_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberFilesArgs = {
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberFiles_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberMessage_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Message_Reaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Reaction_Order_By>>;
  where?: InputMaybe<Message_Reaction_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberMessage_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Reaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Reaction_Order_By>>;
  where?: InputMaybe<Message_Reaction_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberMessage_Reactions_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_Reaction_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Reaction_Order_By>>;
  where?: InputMaybe<Message_Reaction_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberMessagesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberMessages_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** A Relay connection object on "member" */
export type MemberConnection = {
  __typename?: 'memberConnection';
  edges: Array<MemberEdge>;
  pageInfo: PageInfo;
};

export type MemberEdge = {
  __typename?: 'memberEdge';
  cursor: Scalars['String'];
  node: Member;
};

/** aggregated selection of "member" */
export type Member_Aggregate = {
  __typename?: 'member_aggregate';
  aggregate?: Maybe<Member_Aggregate_Fields>;
  nodes: Array<Member>;
};

export type Member_Aggregate_Bool_Exp = {
  count?: InputMaybe<Member_Aggregate_Bool_Exp_Count>;
};

export type Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "member" */
export type Member_Aggregate_Fields = {
  __typename?: 'member_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Member_Max_Fields>;
  min?: Maybe<Member_Min_Fields>;
};


/** aggregate fields of "member" */
export type Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "member" */
export type Member_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Member_Max_Order_By>;
  min?: InputMaybe<Member_Min_Order_By>;
};

/** input type for inserting array relation for remote table "member" */
export type Member_Arr_Rel_Insert_Input = {
  data: Array<Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_On_Conflict>;
};

/** Boolean expression to filter rows from the table "member". All fields are combined with a logical 'AND'. */
export type Member_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Bool_Exp>>;
  _not?: InputMaybe<Member_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Bool_Exp>>;
  activeAt?: InputMaybe<Timestamp_Comparison_Exp>;
  app?: InputMaybe<App_Bool_Exp>;
  appId?: InputMaybe<Uuid_Comparison_Exp>;
  avatarFile?: InputMaybe<File_Bool_Exp>;
  avatarFileId?: InputMaybe<Uuid_Comparison_Exp>;
  channels?: InputMaybe<Member_Channel_Bool_Exp>;
  channels_aggregate?: InputMaybe<Member_Channel_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  encryptedPassword?: InputMaybe<String_Comparison_Exp>;
  externalId?: InputMaybe<String_Comparison_Exp>;
  files?: InputMaybe<Member_File_Bool_Exp>;
  files_aggregate?: InputMaybe<Member_File_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message_reactions?: InputMaybe<Message_Reaction_Bool_Exp>;
  message_reactions_aggregate?: InputMaybe<Message_Reaction_Aggregate_Bool_Exp>;
  messages?: InputMaybe<Message_Bool_Exp>;
  messages_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** columns and relationships of "member_channel" */
export type Member_Channel = Node & {
  __typename?: 'member_channel';
  /** An object relationship */
  channel: Channel;
  channelId: Scalars['uuid'];
  id: Scalars['ID'];
  lastSeenAt?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  member: Member;
  memberId: Scalars['uuid'];
};

/** A Relay connection object on "member_channel" */
export type Member_ChannelConnection = {
  __typename?: 'member_channelConnection';
  edges: Array<Member_ChannelEdge>;
  pageInfo: PageInfo;
};

export type Member_ChannelEdge = {
  __typename?: 'member_channelEdge';
  cursor: Scalars['String'];
  node: Member_Channel;
};

/** aggregated selection of "member_channel" */
export type Member_Channel_Aggregate = {
  __typename?: 'member_channel_aggregate';
  aggregate?: Maybe<Member_Channel_Aggregate_Fields>;
  nodes: Array<Member_Channel>;
};

export type Member_Channel_Aggregate_Bool_Exp = {
  count?: InputMaybe<Member_Channel_Aggregate_Bool_Exp_Count>;
};

export type Member_Channel_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Member_Channel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Member_Channel_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "member_channel" */
export type Member_Channel_Aggregate_Fields = {
  __typename?: 'member_channel_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Member_Channel_Max_Fields>;
  min?: Maybe<Member_Channel_Min_Fields>;
};


/** aggregate fields of "member_channel" */
export type Member_Channel_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Channel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "member_channel" */
export type Member_Channel_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Member_Channel_Max_Order_By>;
  min?: InputMaybe<Member_Channel_Min_Order_By>;
};

/** input type for inserting array relation for remote table "member_channel" */
export type Member_Channel_Arr_Rel_Insert_Input = {
  data: Array<Member_Channel_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_Channel_On_Conflict>;
};

/** Boolean expression to filter rows from the table "member_channel". All fields are combined with a logical 'AND'. */
export type Member_Channel_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Channel_Bool_Exp>>;
  _not?: InputMaybe<Member_Channel_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Channel_Bool_Exp>>;
  channel?: InputMaybe<Channel_Bool_Exp>;
  channelId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastSeenAt?: InputMaybe<Timestamp_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_channel" */
export enum Member_Channel_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberChannelIdKey = 'member_channel_id_key',
  /** unique or primary key constraint on columns "member_id", "channel_id" */
  MemberChannelPkey = 'member_channel_pkey'
}

/** input type for inserting data into table "member_channel" */
export type Member_Channel_Insert_Input = {
  channel?: InputMaybe<Channel_Obj_Rel_Insert_Input>;
  channelId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastSeenAt?: InputMaybe<Scalars['timestamp']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Member_Channel_Max_Fields = {
  __typename?: 'member_channel_max_fields';
  channelId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeenAt?: Maybe<Scalars['timestamp']>;
  memberId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "member_channel" */
export type Member_Channel_Max_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeenAt?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_Channel_Min_Fields = {
  __typename?: 'member_channel_min_fields';
  channelId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeenAt?: Maybe<Scalars['timestamp']>;
  memberId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "member_channel" */
export type Member_Channel_Min_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeenAt?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "member_channel" */
export type Member_Channel_Mutation_Response = {
  __typename?: 'member_channel_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Channel>;
};

/** on_conflict condition type for table "member_channel" */
export type Member_Channel_On_Conflict = {
  constraint: Member_Channel_Constraint;
  update_columns?: Array<Member_Channel_Update_Column>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};

/** Ordering options when selecting data from "member_channel". */
export type Member_Channel_Order_By = {
  channel?: InputMaybe<Channel_Order_By>;
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeenAt?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_channel */
export type Member_Channel_Pk_Columns_Input = {
  channelId: Scalars['uuid'];
  memberId: Scalars['uuid'];
};

/** select columns of table "member_channel" */
export enum Member_Channel_Select_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeenAt = 'lastSeenAt',
  /** column name */
  MemberId = 'memberId'
}

/** input type for updating data in table "member_channel" */
export type Member_Channel_Set_Input = {
  channelId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastSeenAt?: InputMaybe<Scalars['timestamp']>;
  memberId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "member_channel" */
export enum Member_Channel_Update_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeenAt = 'lastSeenAt',
  /** column name */
  MemberId = 'memberId'
}

export type Member_Channel_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Channel_Set_Input>;
  where: Member_Channel_Bool_Exp;
};

/** unique or primary key constraints on table "member" */
export enum Member_Constraint {
  /** unique or primary key constraint on columns "external_id", "app_id" */
  MemberAppIdExternalIdKey = 'member_app_id_external_id_key',
  /** unique or primary key constraint on columns "id" */
  MemberPkey = 'member_pkey'
}

/** columns and relationships of "member_file" */
export type Member_File = Node & {
  __typename?: 'member_file';
  /** An object relationship */
  file: File;
  fileId: Scalars['uuid'];
  id: Scalars['ID'];
  /** An object relationship */
  member: Member;
  memberId: Scalars['uuid'];
};

/** A Relay connection object on "member_file" */
export type Member_FileConnection = {
  __typename?: 'member_fileConnection';
  edges: Array<Member_FileEdge>;
  pageInfo: PageInfo;
};

export type Member_FileEdge = {
  __typename?: 'member_fileEdge';
  cursor: Scalars['String'];
  node: Member_File;
};

/** aggregated selection of "member_file" */
export type Member_File_Aggregate = {
  __typename?: 'member_file_aggregate';
  aggregate?: Maybe<Member_File_Aggregate_Fields>;
  nodes: Array<Member_File>;
};

export type Member_File_Aggregate_Bool_Exp = {
  count?: InputMaybe<Member_File_Aggregate_Bool_Exp_Count>;
};

export type Member_File_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Member_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Member_File_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "member_file" */
export type Member_File_Aggregate_Fields = {
  __typename?: 'member_file_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Member_File_Max_Fields>;
  min?: Maybe<Member_File_Min_Fields>;
};


/** aggregate fields of "member_file" */
export type Member_File_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "member_file" */
export type Member_File_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Member_File_Max_Order_By>;
  min?: InputMaybe<Member_File_Min_Order_By>;
};

/** input type for inserting array relation for remote table "member_file" */
export type Member_File_Arr_Rel_Insert_Input = {
  data: Array<Member_File_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_File_On_Conflict>;
};

/** Boolean expression to filter rows from the table "member_file". All fields are combined with a logical 'AND'. */
export type Member_File_Bool_Exp = {
  _and?: InputMaybe<Array<Member_File_Bool_Exp>>;
  _not?: InputMaybe<Member_File_Bool_Exp>;
  _or?: InputMaybe<Array<Member_File_Bool_Exp>>;
  file?: InputMaybe<File_Bool_Exp>;
  fileId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_file" */
export enum Member_File_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberFileIdKey = 'member_file_id_key',
  /** unique or primary key constraint on columns "member_id", "file_id" */
  MemberFilePkey = 'member_file_pkey'
}

/** input type for inserting data into table "member_file" */
export type Member_File_Insert_Input = {
  file?: InputMaybe<File_Obj_Rel_Insert_Input>;
  fileId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Member_File_Max_Fields = {
  __typename?: 'member_file_max_fields';
  fileId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  memberId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "member_file" */
export type Member_File_Max_Order_By = {
  fileId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_File_Min_Fields = {
  __typename?: 'member_file_min_fields';
  fileId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  memberId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "member_file" */
export type Member_File_Min_Order_By = {
  fileId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "member_file" */
export type Member_File_Mutation_Response = {
  __typename?: 'member_file_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_File>;
};

/** on_conflict condition type for table "member_file" */
export type Member_File_On_Conflict = {
  constraint: Member_File_Constraint;
  update_columns?: Array<Member_File_Update_Column>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};

/** Ordering options when selecting data from "member_file". */
export type Member_File_Order_By = {
  file?: InputMaybe<File_Order_By>;
  fileId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_file */
export type Member_File_Pk_Columns_Input = {
  fileId: Scalars['uuid'];
  memberId: Scalars['uuid'];
};

/** select columns of table "member_file" */
export enum Member_File_Select_Column {
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId'
}

/** input type for updating data in table "member_file" */
export type Member_File_Set_Input = {
  fileId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  memberId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "member_file" */
export enum Member_File_Update_Column {
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId'
}

export type Member_File_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_File_Set_Input>;
  where: Member_File_Bool_Exp;
};

/** input type for inserting data into table "member" */
export type Member_Insert_Input = {
  activeAt?: InputMaybe<Scalars['timestamp']>;
  app?: InputMaybe<App_Obj_Rel_Insert_Input>;
  appId?: InputMaybe<Scalars['uuid']>;
  avatarFile?: InputMaybe<File_Obj_Rel_Insert_Input>;
  avatarFileId?: InputMaybe<Scalars['uuid']>;
  channels?: InputMaybe<Member_Channel_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  encryptedPassword?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Member_File_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  message_reactions?: InputMaybe<Message_Reaction_Arr_Rel_Insert_Input>;
  messages?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Member_Max_Fields = {
  __typename?: 'member_max_fields';
  activeAt?: Maybe<Scalars['timestamp']>;
  appId?: Maybe<Scalars['uuid']>;
  avatarFileId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  encryptedPassword?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "member" */
export type Member_Max_Order_By = {
  activeAt?: InputMaybe<Order_By>;
  appId?: InputMaybe<Order_By>;
  avatarFileId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  encryptedPassword?: InputMaybe<Order_By>;
  externalId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_Min_Fields = {
  __typename?: 'member_min_fields';
  activeAt?: Maybe<Scalars['timestamp']>;
  appId?: Maybe<Scalars['uuid']>;
  avatarFileId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  encryptedPassword?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "member" */
export type Member_Min_Order_By = {
  activeAt?: InputMaybe<Order_By>;
  appId?: InputMaybe<Order_By>;
  avatarFileId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  encryptedPassword?: InputMaybe<Order_By>;
  externalId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "member" */
export type Member_Mutation_Response = {
  __typename?: 'member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Member>;
};

/** input type for inserting object relation for remote table "member" */
export type Member_Obj_Rel_Insert_Input = {
  data: Member_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_On_Conflict>;
};

/** on_conflict condition type for table "member" */
export type Member_On_Conflict = {
  constraint: Member_Constraint;
  update_columns?: Array<Member_Update_Column>;
  where?: InputMaybe<Member_Bool_Exp>;
};

/** Ordering options when selecting data from "member". */
export type Member_Order_By = {
  activeAt?: InputMaybe<Order_By>;
  app?: InputMaybe<App_Order_By>;
  appId?: InputMaybe<Order_By>;
  avatarFile?: InputMaybe<File_Order_By>;
  avatarFileId?: InputMaybe<Order_By>;
  channels_aggregate?: InputMaybe<Member_Channel_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  encryptedPassword?: InputMaybe<Order_By>;
  externalId?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Member_File_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  message_reactions_aggregate?: InputMaybe<Message_Reaction_Aggregate_Order_By>;
  messages_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member */
export type Member_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "member" */
export enum Member_Select_Column {
  /** column name */
  ActiveAt = 'activeAt',
  /** column name */
  AppId = 'appId',
  /** column name */
  AvatarFileId = 'avatarFileId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  EncryptedPassword = 'encryptedPassword',
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "member" */
export type Member_Set_Input = {
  activeAt?: InputMaybe<Scalars['timestamp']>;
  appId?: InputMaybe<Scalars['uuid']>;
  avatarFileId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  encryptedPassword?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "member" */
export enum Member_Update_Column {
  /** column name */
  ActiveAt = 'activeAt',
  /** column name */
  AppId = 'appId',
  /** column name */
  AvatarFileId = 'avatarFileId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  EncryptedPassword = 'encryptedPassword',
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Member_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Set_Input>;
  where: Member_Bool_Exp;
};

/** columns and relationships of "message" */
export type Message = Node & {
  __typename?: 'message';
  body: Scalars['String'];
  /** An object relationship */
  channel: Channel;
  channelId: Scalars['uuid'];
  /** An array relationship */
  children: Array<Message>;
  /** An aggregate relationship */
  children_aggregate: Message_Aggregate;
  /** An array relationship connection */
  children_connection: MessageConnection;
  createdAt: Scalars['timestamp'];
  deletedAt?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  files: Array<Message_File>;
  /** An aggregate relationship */
  files_aggregate: Message_File_Aggregate;
  /** An array relationship connection */
  files_connection: Message_FileConnection;
  id: Scalars['ID'];
  /** An array relationship */
  messageReactions: Array<Message_Reaction>;
  /** An aggregate relationship */
  messageReactions_aggregate: Message_Reaction_Aggregate;
  /** An array relationship connection */
  messageReactions_connection: Message_ReactionConnection;
  /** An object relationship */
  parent?: Maybe<Message>;
  parentId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  references: Array<Message>;
  /** An aggregate relationship */
  references_aggregate: Message_Aggregate;
  /** An array relationship connection */
  references_connection: MessageConnection;
  /** An object relationship */
  replyTo?: Maybe<Message>;
  replyToId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  sender: Member;
  senderId: Scalars['uuid'];
  updatedAt?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "message" */
export type MessageChildrenArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "message" */
export type MessageChildren_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "message" */
export type MessageChildren_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "message" */
export type MessageFilesArgs = {
  distinct_on?: InputMaybe<Array<Message_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_File_Order_By>>;
  where?: InputMaybe<Message_File_Bool_Exp>;
};


/** columns and relationships of "message" */
export type MessageFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_File_Order_By>>;
  where?: InputMaybe<Message_File_Bool_Exp>;
};


/** columns and relationships of "message" */
export type MessageFiles_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_File_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_File_Order_By>>;
  where?: InputMaybe<Message_File_Bool_Exp>;
};


/** columns and relationships of "message" */
export type MessageMessageReactionsArgs = {
  distinct_on?: InputMaybe<Array<Message_Reaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Reaction_Order_By>>;
  where?: InputMaybe<Message_Reaction_Bool_Exp>;
};


/** columns and relationships of "message" */
export type MessageMessageReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Reaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Reaction_Order_By>>;
  where?: InputMaybe<Message_Reaction_Bool_Exp>;
};


/** columns and relationships of "message" */
export type MessageMessageReactions_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_Reaction_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Reaction_Order_By>>;
  where?: InputMaybe<Message_Reaction_Bool_Exp>;
};


/** columns and relationships of "message" */
export type MessageReferencesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "message" */
export type MessageReferences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "message" */
export type MessageReferences_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** A Relay connection object on "message" */
export type MessageConnection = {
  __typename?: 'messageConnection';
  edges: Array<MessageEdge>;
  pageInfo: PageInfo;
};

export type MessageEdge = {
  __typename?: 'messageEdge';
  cursor: Scalars['String'];
  node: Message;
};

/** aggregated selection of "message" */
export type Message_Aggregate = {
  __typename?: 'message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

export type Message_Aggregate_Bool_Exp = {
  count?: InputMaybe<Message_Aggregate_Bool_Exp_Count>;
};

export type Message_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Message_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "message" */
export type Message_Aggregate_Fields = {
  __typename?: 'message_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
};


/** aggregate fields of "message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_Max_Order_By>;
  min?: InputMaybe<Message_Min_Order_By>;
};

/** input type for inserting array relation for remote table "message" */
export type Message_Arr_Rel_Insert_Input = {
  data: Array<Message_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Message_On_Conflict>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  channel?: InputMaybe<Channel_Bool_Exp>;
  channelId?: InputMaybe<Uuid_Comparison_Exp>;
  children?: InputMaybe<Message_Bool_Exp>;
  children_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  files?: InputMaybe<Message_File_Bool_Exp>;
  files_aggregate?: InputMaybe<Message_File_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  messageReactions?: InputMaybe<Message_Reaction_Bool_Exp>;
  messageReactions_aggregate?: InputMaybe<Message_Reaction_Aggregate_Bool_Exp>;
  parent?: InputMaybe<Message_Bool_Exp>;
  parentId?: InputMaybe<Uuid_Comparison_Exp>;
  references?: InputMaybe<Message_Bool_Exp>;
  references_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  replyTo?: InputMaybe<Message_Bool_Exp>;
  replyToId?: InputMaybe<Uuid_Comparison_Exp>;
  sender?: InputMaybe<Member_Bool_Exp>;
  senderId?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "message" */
export enum Message_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessagePkey = 'message_pkey'
}

/** columns and relationships of "message_file" */
export type Message_File = Node & {
  __typename?: 'message_file';
  /** An object relationship */
  file: File;
  fileId: Scalars['uuid'];
  id: Scalars['ID'];
  /** An object relationship */
  message: Message;
  messageId: Scalars['uuid'];
};

/** A Relay connection object on "message_file" */
export type Message_FileConnection = {
  __typename?: 'message_fileConnection';
  edges: Array<Message_FileEdge>;
  pageInfo: PageInfo;
};

export type Message_FileEdge = {
  __typename?: 'message_fileEdge';
  cursor: Scalars['String'];
  node: Message_File;
};

/** aggregated selection of "message_file" */
export type Message_File_Aggregate = {
  __typename?: 'message_file_aggregate';
  aggregate?: Maybe<Message_File_Aggregate_Fields>;
  nodes: Array<Message_File>;
};

export type Message_File_Aggregate_Bool_Exp = {
  count?: InputMaybe<Message_File_Aggregate_Bool_Exp_Count>;
};

export type Message_File_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Message_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Message_File_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "message_file" */
export type Message_File_Aggregate_Fields = {
  __typename?: 'message_file_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Message_File_Max_Fields>;
  min?: Maybe<Message_File_Min_Fields>;
};


/** aggregate fields of "message_file" */
export type Message_File_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message_file" */
export type Message_File_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_File_Max_Order_By>;
  min?: InputMaybe<Message_File_Min_Order_By>;
};

/** input type for inserting array relation for remote table "message_file" */
export type Message_File_Arr_Rel_Insert_Input = {
  data: Array<Message_File_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Message_File_On_Conflict>;
};

/** Boolean expression to filter rows from the table "message_file". All fields are combined with a logical 'AND'. */
export type Message_File_Bool_Exp = {
  _and?: InputMaybe<Array<Message_File_Bool_Exp>>;
  _not?: InputMaybe<Message_File_Bool_Exp>;
  _or?: InputMaybe<Array<Message_File_Bool_Exp>>;
  file?: InputMaybe<File_Bool_Exp>;
  fileId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<Message_Bool_Exp>;
  messageId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "message_file" */
export enum Message_File_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessageFileIdKey = 'message_file_id_key',
  /** unique or primary key constraint on columns "message_id", "file_id" */
  MessageFilePkey = 'message_file_pkey'
}

/** input type for inserting data into table "message_file" */
export type Message_File_Insert_Input = {
  file?: InputMaybe<File_Obj_Rel_Insert_Input>;
  fileId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Message_Obj_Rel_Insert_Input>;
  messageId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Message_File_Max_Fields = {
  __typename?: 'message_file_max_fields';
  fileId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  messageId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "message_file" */
export type Message_File_Max_Order_By = {
  fileId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  messageId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Message_File_Min_Fields = {
  __typename?: 'message_file_min_fields';
  fileId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  messageId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "message_file" */
export type Message_File_Min_Order_By = {
  fileId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  messageId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "message_file" */
export type Message_File_Mutation_Response = {
  __typename?: 'message_file_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message_File>;
};

/** on_conflict condition type for table "message_file" */
export type Message_File_On_Conflict = {
  constraint: Message_File_Constraint;
  update_columns?: Array<Message_File_Update_Column>;
  where?: InputMaybe<Message_File_Bool_Exp>;
};

/** Ordering options when selecting data from "message_file". */
export type Message_File_Order_By = {
  file?: InputMaybe<File_Order_By>;
  fileId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Message_Order_By>;
  messageId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: message_file */
export type Message_File_Pk_Columns_Input = {
  fileId: Scalars['uuid'];
  messageId: Scalars['uuid'];
};

/** select columns of table "message_file" */
export enum Message_File_Select_Column {
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'messageId'
}

/** input type for updating data in table "message_file" */
export type Message_File_Set_Input = {
  fileId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  messageId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "message_file" */
export enum Message_File_Update_Column {
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'messageId'
}

export type Message_File_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Message_File_Set_Input>;
  where: Message_File_Bool_Exp;
};

/** input type for inserting data into table "message" */
export type Message_Insert_Input = {
  body?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Channel_Obj_Rel_Insert_Input>;
  channelId?: InputMaybe<Scalars['uuid']>;
  children?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  files?: InputMaybe<Message_File_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  messageReactions?: InputMaybe<Message_Reaction_Arr_Rel_Insert_Input>;
  parent?: InputMaybe<Message_Obj_Rel_Insert_Input>;
  parentId?: InputMaybe<Scalars['uuid']>;
  references?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  replyTo?: InputMaybe<Message_Obj_Rel_Insert_Input>;
  replyToId?: InputMaybe<Scalars['uuid']>;
  sender?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  senderId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'message_max_fields';
  body?: Maybe<Scalars['String']>;
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  parentId?: Maybe<Scalars['uuid']>;
  replyToId?: Maybe<Scalars['uuid']>;
  senderId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  body?: InputMaybe<Order_By>;
  channelId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  replyToId?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'message_min_fields';
  body?: Maybe<Scalars['String']>;
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  parentId?: Maybe<Scalars['uuid']>;
  replyToId?: Maybe<Scalars['uuid']>;
  senderId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  body?: InputMaybe<Order_By>;
  channelId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  replyToId?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "message" */
export type Message_Mutation_Response = {
  __typename?: 'message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** input type for inserting object relation for remote table "message" */
export type Message_Obj_Rel_Insert_Input = {
  data: Message_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Message_On_Conflict>;
};

/** on_conflict condition type for table "message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns?: Array<Message_Update_Column>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  body?: InputMaybe<Order_By>;
  channel?: InputMaybe<Channel_Order_By>;
  channelId?: InputMaybe<Order_By>;
  children_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Message_File_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  messageReactions_aggregate?: InputMaybe<Message_Reaction_Aggregate_Order_By>;
  parent?: InputMaybe<Message_Order_By>;
  parentId?: InputMaybe<Order_By>;
  references_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  replyTo?: InputMaybe<Message_Order_By>;
  replyToId?: InputMaybe<Order_By>;
  sender?: InputMaybe<Member_Order_By>;
  senderId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: message */
export type Message_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "message_reaction" */
export type Message_Reaction = Node & {
  __typename?: 'message_reaction';
  id: Scalars['ID'];
  /** An object relationship */
  member: Member;
  member_id: Scalars['uuid'];
  /** An object relationship */
  message: Message;
  messageId: Scalars['uuid'];
  /** An object relationship */
  reaction: Reaction;
  reactionId: Scalars['uuid'];
};

/** A Relay connection object on "message_reaction" */
export type Message_ReactionConnection = {
  __typename?: 'message_reactionConnection';
  edges: Array<Message_ReactionEdge>;
  pageInfo: PageInfo;
};

export type Message_ReactionEdge = {
  __typename?: 'message_reactionEdge';
  cursor: Scalars['String'];
  node: Message_Reaction;
};

/** aggregated selection of "message_reaction" */
export type Message_Reaction_Aggregate = {
  __typename?: 'message_reaction_aggregate';
  aggregate?: Maybe<Message_Reaction_Aggregate_Fields>;
  nodes: Array<Message_Reaction>;
};

export type Message_Reaction_Aggregate_Bool_Exp = {
  count?: InputMaybe<Message_Reaction_Aggregate_Bool_Exp_Count>;
};

export type Message_Reaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Message_Reaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Message_Reaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "message_reaction" */
export type Message_Reaction_Aggregate_Fields = {
  __typename?: 'message_reaction_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Message_Reaction_Max_Fields>;
  min?: Maybe<Message_Reaction_Min_Fields>;
};


/** aggregate fields of "message_reaction" */
export type Message_Reaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Reaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message_reaction" */
export type Message_Reaction_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_Reaction_Max_Order_By>;
  min?: InputMaybe<Message_Reaction_Min_Order_By>;
};

/** input type for inserting array relation for remote table "message_reaction" */
export type Message_Reaction_Arr_Rel_Insert_Input = {
  data: Array<Message_Reaction_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Message_Reaction_On_Conflict>;
};

/** Boolean expression to filter rows from the table "message_reaction". All fields are combined with a logical 'AND'. */
export type Message_Reaction_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Reaction_Bool_Exp>>;
  _not?: InputMaybe<Message_Reaction_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Reaction_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  member_id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<Message_Bool_Exp>;
  messageId?: InputMaybe<Uuid_Comparison_Exp>;
  reaction?: InputMaybe<Reaction_Bool_Exp>;
  reactionId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "message_reaction" */
export enum Message_Reaction_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessageReactionIdKey = 'message_reaction_id_key',
  /** unique or primary key constraint on columns "member_id", "message_id", "reaction_id" */
  MessageReactionPkey = 'message_reaction_pkey'
}

/** input type for inserting data into table "message_reaction" */
export type Message_Reaction_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  member_id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Message_Obj_Rel_Insert_Input>;
  messageId?: InputMaybe<Scalars['uuid']>;
  reaction?: InputMaybe<Reaction_Obj_Rel_Insert_Input>;
  reactionId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Message_Reaction_Max_Fields = {
  __typename?: 'message_reaction_max_fields';
  id?: Maybe<Scalars['uuid']>;
  member_id?: Maybe<Scalars['uuid']>;
  messageId?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "message_reaction" */
export type Message_Reaction_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  messageId?: InputMaybe<Order_By>;
  reactionId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Reaction_Min_Fields = {
  __typename?: 'message_reaction_min_fields';
  id?: Maybe<Scalars['uuid']>;
  member_id?: Maybe<Scalars['uuid']>;
  messageId?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "message_reaction" */
export type Message_Reaction_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  messageId?: InputMaybe<Order_By>;
  reactionId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "message_reaction" */
export type Message_Reaction_Mutation_Response = {
  __typename?: 'message_reaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message_Reaction>;
};

/** on_conflict condition type for table "message_reaction" */
export type Message_Reaction_On_Conflict = {
  constraint: Message_Reaction_Constraint;
  update_columns?: Array<Message_Reaction_Update_Column>;
  where?: InputMaybe<Message_Reaction_Bool_Exp>;
};

/** Ordering options when selecting data from "message_reaction". */
export type Message_Reaction_Order_By = {
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  member_id?: InputMaybe<Order_By>;
  message?: InputMaybe<Message_Order_By>;
  messageId?: InputMaybe<Order_By>;
  reaction?: InputMaybe<Reaction_Order_By>;
  reactionId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: message_reaction */
export type Message_Reaction_Pk_Columns_Input = {
  member_id: Scalars['uuid'];
  messageId: Scalars['uuid'];
  reactionId: Scalars['uuid'];
};

/** select columns of table "message_reaction" */
export enum Message_Reaction_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  MessageId = 'messageId',
  /** column name */
  ReactionId = 'reactionId'
}

/** input type for updating data in table "message_reaction" */
export type Message_Reaction_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  member_id?: InputMaybe<Scalars['uuid']>;
  messageId?: InputMaybe<Scalars['uuid']>;
  reactionId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "message_reaction" */
export enum Message_Reaction_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  MessageId = 'messageId',
  /** column name */
  ReactionId = 'reactionId'
}

export type Message_Reaction_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Message_Reaction_Set_Input>;
  where: Message_Reaction_Bool_Exp;
};

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  ReplyToId = 'replyToId',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "message" */
export type Message_Set_Input = {
  body?: InputMaybe<Scalars['String']>;
  channelId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  parentId?: InputMaybe<Scalars['uuid']>;
  replyToId?: InputMaybe<Scalars['uuid']>;
  senderId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "message" */
export enum Message_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  ReplyToId = 'replyToId',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Message_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "app" */
  delete_app?: Maybe<App_Mutation_Response>;
  /** delete single row from the table: "app" */
  delete_app_by_pk?: Maybe<App>;
  /** delete data from the table: "channel" */
  delete_channel?: Maybe<Channel_Mutation_Response>;
  /** delete single row from the table: "channel" */
  delete_channel_by_pk?: Maybe<Channel>;
  /** delete data from the table: "customer" */
  delete_customer?: Maybe<Customer_Mutation_Response>;
  /** delete single row from the table: "customer" */
  delete_customer_by_pk?: Maybe<Customer>;
  /** delete data from the table: "customer_role" */
  delete_customer_role?: Maybe<Customer_Role_Mutation_Response>;
  /** delete single row from the table: "customer_role" */
  delete_customer_role_by_pk?: Maybe<Customer_Role>;
  /** delete data from the table: "file" */
  delete_file?: Maybe<File_Mutation_Response>;
  /** delete single row from the table: "file" */
  delete_file_by_pk?: Maybe<File>;
  /** delete data from the table: "file_service" */
  delete_file_service?: Maybe<File_Service_Mutation_Response>;
  /** delete single row from the table: "file_service" */
  delete_file_service_by_pk?: Maybe<File_Service>;
  /** delete data from the table: "file_type" */
  delete_file_type?: Maybe<File_Type_Mutation_Response>;
  /** delete single row from the table: "file_type" */
  delete_file_type_by_pk?: Maybe<File_Type>;
  /** delete data from the table: "member" */
  delete_member?: Maybe<Member_Mutation_Response>;
  /** delete single row from the table: "member" */
  delete_member_by_pk?: Maybe<Member>;
  /** delete data from the table: "member_channel" */
  delete_member_channel?: Maybe<Member_Channel_Mutation_Response>;
  /** delete single row from the table: "member_channel" */
  delete_member_channel_by_pk?: Maybe<Member_Channel>;
  /** delete data from the table: "member_file" */
  delete_member_file?: Maybe<Member_File_Mutation_Response>;
  /** delete single row from the table: "member_file" */
  delete_member_file_by_pk?: Maybe<Member_File>;
  /** delete data from the table: "message" */
  delete_message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "message" */
  delete_message_by_pk?: Maybe<Message>;
  /** delete data from the table: "message_file" */
  delete_message_file?: Maybe<Message_File_Mutation_Response>;
  /** delete single row from the table: "message_file" */
  delete_message_file_by_pk?: Maybe<Message_File>;
  /** delete data from the table: "message_reaction" */
  delete_message_reaction?: Maybe<Message_Reaction_Mutation_Response>;
  /** delete single row from the table: "message_reaction" */
  delete_message_reaction_by_pk?: Maybe<Message_Reaction>;
  /** delete data from the table: "reaction" */
  delete_reaction?: Maybe<Reaction_Mutation_Response>;
  /** delete single row from the table: "reaction" */
  delete_reaction_by_pk?: Maybe<Reaction>;
  /** insert data into the table: "app" */
  insert_app?: Maybe<App_Mutation_Response>;
  /** insert a single row into the table: "app" */
  insert_app_one?: Maybe<App>;
  /** insert data into the table: "channel" */
  insert_channel?: Maybe<Channel_Mutation_Response>;
  /** insert a single row into the table: "channel" */
  insert_channel_one?: Maybe<Channel>;
  /** insert data into the table: "customer" */
  insert_customer?: Maybe<Customer_Mutation_Response>;
  /** insert a single row into the table: "customer" */
  insert_customer_one?: Maybe<Customer>;
  /** insert data into the table: "customer_role" */
  insert_customer_role?: Maybe<Customer_Role_Mutation_Response>;
  /** insert a single row into the table: "customer_role" */
  insert_customer_role_one?: Maybe<Customer_Role>;
  /** insert data into the table: "file" */
  insert_file?: Maybe<File_Mutation_Response>;
  /** insert a single row into the table: "file" */
  insert_file_one?: Maybe<File>;
  /** insert data into the table: "file_service" */
  insert_file_service?: Maybe<File_Service_Mutation_Response>;
  /** insert a single row into the table: "file_service" */
  insert_file_service_one?: Maybe<File_Service>;
  /** insert data into the table: "file_type" */
  insert_file_type?: Maybe<File_Type_Mutation_Response>;
  /** insert a single row into the table: "file_type" */
  insert_file_type_one?: Maybe<File_Type>;
  /** insert data into the table: "member" */
  insert_member?: Maybe<Member_Mutation_Response>;
  /** insert data into the table: "member_channel" */
  insert_member_channel?: Maybe<Member_Channel_Mutation_Response>;
  /** insert a single row into the table: "member_channel" */
  insert_member_channel_one?: Maybe<Member_Channel>;
  /** insert data into the table: "member_file" */
  insert_member_file?: Maybe<Member_File_Mutation_Response>;
  /** insert a single row into the table: "member_file" */
  insert_member_file_one?: Maybe<Member_File>;
  /** insert a single row into the table: "member" */
  insert_member_one?: Maybe<Member>;
  /** insert data into the table: "message" */
  insert_message?: Maybe<Message_Mutation_Response>;
  /** insert data into the table: "message_file" */
  insert_message_file?: Maybe<Message_File_Mutation_Response>;
  /** insert a single row into the table: "message_file" */
  insert_message_file_one?: Maybe<Message_File>;
  /** insert a single row into the table: "message" */
  insert_message_one?: Maybe<Message>;
  /** insert data into the table: "message_reaction" */
  insert_message_reaction?: Maybe<Message_Reaction_Mutation_Response>;
  /** insert a single row into the table: "message_reaction" */
  insert_message_reaction_one?: Maybe<Message_Reaction>;
  /** insert data into the table: "reaction" */
  insert_reaction?: Maybe<Reaction_Mutation_Response>;
  /** insert a single row into the table: "reaction" */
  insert_reaction_one?: Maybe<Reaction>;
  /** update data of the table: "app" */
  update_app?: Maybe<App_Mutation_Response>;
  /** update single row of the table: "app" */
  update_app_by_pk?: Maybe<App>;
  /** update multiples rows of table: "app" */
  update_app_many?: Maybe<Array<Maybe<App_Mutation_Response>>>;
  /** update data of the table: "channel" */
  update_channel?: Maybe<Channel_Mutation_Response>;
  /** update single row of the table: "channel" */
  update_channel_by_pk?: Maybe<Channel>;
  /** update multiples rows of table: "channel" */
  update_channel_many?: Maybe<Array<Maybe<Channel_Mutation_Response>>>;
  /** update data of the table: "customer" */
  update_customer?: Maybe<Customer_Mutation_Response>;
  /** update single row of the table: "customer" */
  update_customer_by_pk?: Maybe<Customer>;
  /** update multiples rows of table: "customer" */
  update_customer_many?: Maybe<Array<Maybe<Customer_Mutation_Response>>>;
  /** update data of the table: "customer_role" */
  update_customer_role?: Maybe<Customer_Role_Mutation_Response>;
  /** update single row of the table: "customer_role" */
  update_customer_role_by_pk?: Maybe<Customer_Role>;
  /** update multiples rows of table: "customer_role" */
  update_customer_role_many?: Maybe<Array<Maybe<Customer_Role_Mutation_Response>>>;
  /** update data of the table: "file" */
  update_file?: Maybe<File_Mutation_Response>;
  /** update single row of the table: "file" */
  update_file_by_pk?: Maybe<File>;
  /** update multiples rows of table: "file" */
  update_file_many?: Maybe<Array<Maybe<File_Mutation_Response>>>;
  /** update data of the table: "file_service" */
  update_file_service?: Maybe<File_Service_Mutation_Response>;
  /** update single row of the table: "file_service" */
  update_file_service_by_pk?: Maybe<File_Service>;
  /** update multiples rows of table: "file_service" */
  update_file_service_many?: Maybe<Array<Maybe<File_Service_Mutation_Response>>>;
  /** update data of the table: "file_type" */
  update_file_type?: Maybe<File_Type_Mutation_Response>;
  /** update single row of the table: "file_type" */
  update_file_type_by_pk?: Maybe<File_Type>;
  /** update multiples rows of table: "file_type" */
  update_file_type_many?: Maybe<Array<Maybe<File_Type_Mutation_Response>>>;
  /** update data of the table: "member" */
  update_member?: Maybe<Member_Mutation_Response>;
  /** update single row of the table: "member" */
  update_member_by_pk?: Maybe<Member>;
  /** update data of the table: "member_channel" */
  update_member_channel?: Maybe<Member_Channel_Mutation_Response>;
  /** update single row of the table: "member_channel" */
  update_member_channel_by_pk?: Maybe<Member_Channel>;
  /** update multiples rows of table: "member_channel" */
  update_member_channel_many?: Maybe<Array<Maybe<Member_Channel_Mutation_Response>>>;
  /** update data of the table: "member_file" */
  update_member_file?: Maybe<Member_File_Mutation_Response>;
  /** update single row of the table: "member_file" */
  update_member_file_by_pk?: Maybe<Member_File>;
  /** update multiples rows of table: "member_file" */
  update_member_file_many?: Maybe<Array<Maybe<Member_File_Mutation_Response>>>;
  /** update multiples rows of table: "member" */
  update_member_many?: Maybe<Array<Maybe<Member_Mutation_Response>>>;
  /** update data of the table: "message" */
  update_message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "message" */
  update_message_by_pk?: Maybe<Message>;
  /** update data of the table: "message_file" */
  update_message_file?: Maybe<Message_File_Mutation_Response>;
  /** update single row of the table: "message_file" */
  update_message_file_by_pk?: Maybe<Message_File>;
  /** update multiples rows of table: "message_file" */
  update_message_file_many?: Maybe<Array<Maybe<Message_File_Mutation_Response>>>;
  /** update multiples rows of table: "message" */
  update_message_many?: Maybe<Array<Maybe<Message_Mutation_Response>>>;
  /** update data of the table: "message_reaction" */
  update_message_reaction?: Maybe<Message_Reaction_Mutation_Response>;
  /** update single row of the table: "message_reaction" */
  update_message_reaction_by_pk?: Maybe<Message_Reaction>;
  /** update multiples rows of table: "message_reaction" */
  update_message_reaction_many?: Maybe<Array<Maybe<Message_Reaction_Mutation_Response>>>;
  /** update data of the table: "reaction" */
  update_reaction?: Maybe<Reaction_Mutation_Response>;
  /** update single row of the table: "reaction" */
  update_reaction_by_pk?: Maybe<Reaction>;
  /** update multiples rows of table: "reaction" */
  update_reaction_many?: Maybe<Array<Maybe<Reaction_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AppArgs = {
  where: App_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ChannelArgs = {
  where: Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CustomerArgs = {
  where: Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Customer_RoleArgs = {
  where: Customer_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customer_Role_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_FileArgs = {
  where: File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_File_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_File_ServiceArgs = {
  where: File_Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_File_Service_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_File_TypeArgs = {
  where: File_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_File_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_MemberArgs = {
  where: Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Member_ChannelArgs = {
  where: Member_Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Channel_By_PkArgs = {
  channelId: Scalars['uuid'];
  memberId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Member_FileArgs = {
  where: Member_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_File_By_PkArgs = {
  fileId: Scalars['uuid'];
  memberId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Message_FileArgs = {
  where: Message_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_File_By_PkArgs = {
  fileId: Scalars['uuid'];
  messageId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Message_ReactionArgs = {
  where: Message_Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_Reaction_By_PkArgs = {
  member_id: Scalars['uuid'];
  messageId: Scalars['uuid'];
  reactionId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ReactionArgs = {
  where: Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AppArgs = {
  objects: Array<App_Insert_Input>;
  on_conflict?: InputMaybe<App_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_OneArgs = {
  object: App_Insert_Input;
  on_conflict?: InputMaybe<App_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChannelArgs = {
  objects: Array<Channel_Insert_Input>;
  on_conflict?: InputMaybe<Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_OneArgs = {
  object: Channel_Insert_Input;
  on_conflict?: InputMaybe<Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CustomerArgs = {
  objects: Array<Customer_Insert_Input>;
  on_conflict?: InputMaybe<Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_OneArgs = {
  object: Customer_Insert_Input;
  on_conflict?: InputMaybe<Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_RoleArgs = {
  objects: Array<Customer_Role_Insert_Input>;
  on_conflict?: InputMaybe<Customer_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_Role_OneArgs = {
  object: Customer_Role_Insert_Input;
  on_conflict?: InputMaybe<Customer_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FileArgs = {
  objects: Array<File_Insert_Input>;
  on_conflict?: InputMaybe<File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_OneArgs = {
  object: File_Insert_Input;
  on_conflict?: InputMaybe<File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_ServiceArgs = {
  objects: Array<File_Service_Insert_Input>;
  on_conflict?: InputMaybe<File_Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_Service_OneArgs = {
  object: File_Service_Insert_Input;
  on_conflict?: InputMaybe<File_Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_TypeArgs = {
  objects: Array<File_Type_Insert_Input>;
  on_conflict?: InputMaybe<File_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_Type_OneArgs = {
  object: File_Type_Insert_Input;
  on_conflict?: InputMaybe<File_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberArgs = {
  objects: Array<Member_Insert_Input>;
  on_conflict?: InputMaybe<Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_ChannelArgs = {
  objects: Array<Member_Channel_Insert_Input>;
  on_conflict?: InputMaybe<Member_Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Channel_OneArgs = {
  object: Member_Channel_Insert_Input;
  on_conflict?: InputMaybe<Member_Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_FileArgs = {
  objects: Array<Member_File_Insert_Input>;
  on_conflict?: InputMaybe<Member_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_File_OneArgs = {
  object: Member_File_Insert_Input;
  on_conflict?: InputMaybe<Member_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_OneArgs = {
  object: Member_Insert_Input;
  on_conflict?: InputMaybe<Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_FileArgs = {
  objects: Array<Message_File_Insert_Input>;
  on_conflict?: InputMaybe<Message_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_File_OneArgs = {
  object: Message_File_Insert_Input;
  on_conflict?: InputMaybe<Message_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_ReactionArgs = {
  objects: Array<Message_Reaction_Insert_Input>;
  on_conflict?: InputMaybe<Message_Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_Reaction_OneArgs = {
  object: Message_Reaction_Insert_Input;
  on_conflict?: InputMaybe<Message_Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReactionArgs = {
  objects: Array<Reaction_Insert_Input>;
  on_conflict?: InputMaybe<Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reaction_OneArgs = {
  object: Reaction_Insert_Input;
  on_conflict?: InputMaybe<Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AppArgs = {
  _append?: InputMaybe<App_Append_Input>;
  _delete_at_path?: InputMaybe<App_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_Delete_Key_Input>;
  _prepend?: InputMaybe<App_Prepend_Input>;
  _set?: InputMaybe<App_Set_Input>;
  where: App_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_By_PkArgs = {
  _append?: InputMaybe<App_Append_Input>;
  _delete_at_path?: InputMaybe<App_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_Delete_Key_Input>;
  _prepend?: InputMaybe<App_Prepend_Input>;
  _set?: InputMaybe<App_Set_Input>;
  pk_columns: App_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_ManyArgs = {
  updates: Array<App_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ChannelArgs = {
  _set?: InputMaybe<Channel_Set_Input>;
  where: Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_By_PkArgs = {
  _set?: InputMaybe<Channel_Set_Input>;
  pk_columns: Channel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_ManyArgs = {
  updates: Array<Channel_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CustomerArgs = {
  _set?: InputMaybe<Customer_Set_Input>;
  where: Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_By_PkArgs = {
  _set?: InputMaybe<Customer_Set_Input>;
  pk_columns: Customer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_ManyArgs = {
  updates: Array<Customer_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_RoleArgs = {
  _set?: InputMaybe<Customer_Role_Set_Input>;
  where: Customer_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_Role_By_PkArgs = {
  _set?: InputMaybe<Customer_Role_Set_Input>;
  pk_columns: Customer_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_Role_ManyArgs = {
  updates: Array<Customer_Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FileArgs = {
  _set?: InputMaybe<File_Set_Input>;
  where: File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_File_By_PkArgs = {
  _set?: InputMaybe<File_Set_Input>;
  pk_columns: File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_File_ManyArgs = {
  updates: Array<File_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_File_ServiceArgs = {
  _set?: InputMaybe<File_Service_Set_Input>;
  where: File_Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_File_Service_By_PkArgs = {
  _set?: InputMaybe<File_Service_Set_Input>;
  pk_columns: File_Service_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_File_Service_ManyArgs = {
  updates: Array<File_Service_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_File_TypeArgs = {
  _set?: InputMaybe<File_Type_Set_Input>;
  where: File_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_File_Type_By_PkArgs = {
  _set?: InputMaybe<File_Type_Set_Input>;
  pk_columns: File_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_File_Type_ManyArgs = {
  updates: Array<File_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MemberArgs = {
  _set?: InputMaybe<Member_Set_Input>;
  where: Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_By_PkArgs = {
  _set?: InputMaybe<Member_Set_Input>;
  pk_columns: Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_ChannelArgs = {
  _set?: InputMaybe<Member_Channel_Set_Input>;
  where: Member_Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Channel_By_PkArgs = {
  _set?: InputMaybe<Member_Channel_Set_Input>;
  pk_columns: Member_Channel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Channel_ManyArgs = {
  updates: Array<Member_Channel_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_FileArgs = {
  _set?: InputMaybe<Member_File_Set_Input>;
  where: Member_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_File_By_PkArgs = {
  _set?: InputMaybe<Member_File_Set_Input>;
  pk_columns: Member_File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_File_ManyArgs = {
  updates: Array<Member_File_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_ManyArgs = {
  updates: Array<Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _set?: InputMaybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _set?: InputMaybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Message_FileArgs = {
  _set?: InputMaybe<Message_File_Set_Input>;
  where: Message_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_File_By_PkArgs = {
  _set?: InputMaybe<Message_File_Set_Input>;
  pk_columns: Message_File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Message_File_ManyArgs = {
  updates: Array<Message_File_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Message_ManyArgs = {
  updates: Array<Message_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Message_ReactionArgs = {
  _set?: InputMaybe<Message_Reaction_Set_Input>;
  where: Message_Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_Reaction_By_PkArgs = {
  _set?: InputMaybe<Message_Reaction_Set_Input>;
  pk_columns: Message_Reaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Message_Reaction_ManyArgs = {
  updates: Array<Message_Reaction_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ReactionArgs = {
  _set?: InputMaybe<Reaction_Set_Input>;
  where: Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reaction_By_PkArgs = {
  _set?: InputMaybe<Reaction_Set_Input>;
  pk_columns: Reaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reaction_ManyArgs = {
  updates: Array<Reaction_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "app" */
  app_connection: AppConnection;
  /** fetch data from the table: "channel" */
  channel_connection: ChannelConnection;
  /** fetch data from the table: "customer" */
  customer_connection: CustomerConnection;
  /** fetch data from the table: "customer_role" */
  customer_role_connection: Customer_RoleConnection;
  /** fetch data from the table: "file" */
  file_connection: FileConnection;
  /** fetch data from the table: "file_service" */
  file_service_connection: File_ServiceConnection;
  /** fetch data from the table: "file_type" */
  file_type_connection: File_TypeConnection;
  /** fetch data from the table: "member_channel" */
  member_channel_connection: Member_ChannelConnection;
  /** fetch data from the table: "member" */
  member_connection: MemberConnection;
  /** fetch data from the table: "member_file" */
  member_file_connection: Member_FileConnection;
  /** fetch data from the table: "message" */
  message_connection: MessageConnection;
  /** fetch data from the table: "message_file" */
  message_file_connection: Message_FileConnection;
  /** fetch data from the table: "message_reaction" */
  message_reaction_connection: Message_ReactionConnection;
  node?: Maybe<Node>;
  /** fetch data from the table: "reaction" */
  reaction_connection: ReactionConnection;
};


export type Query_RootApp_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<App_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Order_By>>;
  where?: InputMaybe<App_Bool_Exp>;
};


export type Query_RootChannel_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Query_RootCustomer_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_Role_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Customer_Role_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Role_Order_By>>;
  where?: InputMaybe<Customer_Role_Bool_Exp>;
};


export type Query_RootFile_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<File_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Order_By>>;
  where?: InputMaybe<File_Bool_Exp>;
};


export type Query_RootFile_Service_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<File_Service_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Service_Order_By>>;
  where?: InputMaybe<File_Service_Bool_Exp>;
};


export type Query_RootFile_Type_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<File_Type_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Type_Order_By>>;
  where?: InputMaybe<File_Type_Bool_Exp>;
};


export type Query_RootMember_Channel_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


export type Query_RootMember_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_File_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


export type Query_RootMessage_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_File_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_File_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_File_Order_By>>;
  where?: InputMaybe<Message_File_Bool_Exp>;
};


export type Query_RootMessage_Reaction_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_Reaction_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Reaction_Order_By>>;
  where?: InputMaybe<Message_Reaction_Bool_Exp>;
};


export type Query_RootNodeArgs = {
  id: Scalars['ID'];
};


export type Query_RootReaction_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Reaction_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reaction_Order_By>>;
  where?: InputMaybe<Reaction_Bool_Exp>;
};

/** columns and relationships of "reaction" */
export type Reaction = Node & {
  __typename?: 'reaction';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** A Relay connection object on "reaction" */
export type ReactionConnection = {
  __typename?: 'reactionConnection';
  edges: Array<ReactionEdge>;
  pageInfo: PageInfo;
};

export type ReactionEdge = {
  __typename?: 'reactionEdge';
  cursor: Scalars['String'];
  node: Reaction;
};

/** Boolean expression to filter rows from the table "reaction". All fields are combined with a logical 'AND'. */
export type Reaction_Bool_Exp = {
  _and?: InputMaybe<Array<Reaction_Bool_Exp>>;
  _not?: InputMaybe<Reaction_Bool_Exp>;
  _or?: InputMaybe<Array<Reaction_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "reaction" */
export enum Reaction_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReactionPkey = 'reaction_pkey'
}

/** input type for inserting data into table "reaction" */
export type Reaction_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "reaction" */
export type Reaction_Mutation_Response = {
  __typename?: 'reaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Reaction>;
};

/** input type for inserting object relation for remote table "reaction" */
export type Reaction_Obj_Rel_Insert_Input = {
  data: Reaction_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Reaction_On_Conflict>;
};

/** on_conflict condition type for table "reaction" */
export type Reaction_On_Conflict = {
  constraint: Reaction_Constraint;
  update_columns?: Array<Reaction_Update_Column>;
  where?: InputMaybe<Reaction_Bool_Exp>;
};

/** Ordering options when selecting data from "reaction". */
export type Reaction_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: reaction */
export type Reaction_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "reaction" */
export enum Reaction_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "reaction" */
export type Reaction_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "reaction" */
export enum Reaction_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Reaction_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reaction_Set_Input>;
  where: Reaction_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "app" */
  app_connection: AppConnection;
  /** fetch data from the table: "channel" */
  channel_connection: ChannelConnection;
  /** fetch data from the table: "customer" */
  customer_connection: CustomerConnection;
  /** fetch data from the table: "customer_role" */
  customer_role_connection: Customer_RoleConnection;
  /** fetch data from the table: "file" */
  file_connection: FileConnection;
  /** fetch data from the table: "file_service" */
  file_service_connection: File_ServiceConnection;
  /** fetch data from the table: "file_type" */
  file_type_connection: File_TypeConnection;
  /** fetch data from the table: "member_channel" */
  member_channel_connection: Member_ChannelConnection;
  /** fetch data from the table: "member" */
  member_connection: MemberConnection;
  /** fetch data from the table: "member_file" */
  member_file_connection: Member_FileConnection;
  /** fetch data from the table: "message" */
  message_connection: MessageConnection;
  /** fetch data from the table: "message_file" */
  message_file_connection: Message_FileConnection;
  /** fetch data from the table: "message_reaction" */
  message_reaction_connection: Message_ReactionConnection;
  node?: Maybe<Node>;
  /** fetch data from the table: "reaction" */
  reaction_connection: ReactionConnection;
};


export type Subscription_RootApp_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<App_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Order_By>>;
  where?: InputMaybe<App_Bool_Exp>;
};


export type Subscription_RootChannel_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Subscription_RootCustomer_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_Role_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Customer_Role_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Role_Order_By>>;
  where?: InputMaybe<Customer_Role_Bool_Exp>;
};


export type Subscription_RootFile_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<File_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Order_By>>;
  where?: InputMaybe<File_Bool_Exp>;
};


export type Subscription_RootFile_Service_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<File_Service_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Service_Order_By>>;
  where?: InputMaybe<File_Service_Bool_Exp>;
};


export type Subscription_RootFile_Type_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<File_Type_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Type_Order_By>>;
  where?: InputMaybe<File_Type_Bool_Exp>;
};


export type Subscription_RootMember_Channel_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


export type Subscription_RootMember_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_File_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


export type Subscription_RootMessage_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_File_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_File_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_File_Order_By>>;
  where?: InputMaybe<Message_File_Bool_Exp>;
};


export type Subscription_RootMessage_Reaction_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Message_Reaction_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Reaction_Order_By>>;
  where?: InputMaybe<Message_Reaction_Bool_Exp>;
};


export type Subscription_RootNodeArgs = {
  id: Scalars['ID'];
};


export type Subscription_RootReaction_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Reaction_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reaction_Order_By>>;
  where?: InputMaybe<Reaction_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetMemberChannelsQueryVariables = Exact<{
  memberId: Scalars['uuid'];
}>;


export type GetMemberChannelsQuery = { __typename?: 'query_root', member_channel_connection: { __typename?: 'member_channelConnection', edges: Array<{ __typename?: 'member_channelEdge', node: { __typename?: 'member_channel', channelId: any, channel: { __typename?: 'channel', name: string } } }> } };

export type ChannelPageMessageFragment = { __typename?: 'message', id: string, createdAt: any } & { ' $fragmentName'?: 'ChannelPageMessageFragment' };

export type GetChannelNewMessagesSubscriptionVariables = Exact<{
  channelId: Scalars['uuid'];
}>;


export type GetChannelNewMessagesSubscription = { __typename?: 'subscription_root', message_connection: { __typename?: 'messageConnection', edges: Array<{ __typename?: 'messageEdge', cursor: string, node: (
        { __typename?: 'message' }
        & { ' $fragmentRefs'?: { 'ChannelPageMessageFragment': ChannelPageMessageFragment;'MessageItemMessageFragment': MessageItemMessageFragment } }
      ) }> } };

export type GetChannelMessagesQueryVariables = Exact<{
  channelId: Scalars['uuid'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetChannelMessagesQuery = { __typename?: 'query_root', message_connection: { __typename?: 'messageConnection', edges: Array<{ __typename?: 'messageEdge', cursor: string, node: (
        { __typename?: 'message' }
        & { ' $fragmentRefs'?: { 'ChannelPageMessageFragment': ChannelPageMessageFragment;'MessageItemMessageFragment': MessageItemMessageFragment } }
      ) }>, pageInfo: { __typename?: 'PageInfo', endCursor: string, startCursor: string, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type GetChannelMembersQueryVariables = Exact<{
  channelId: Scalars['uuid'];
}>;


export type GetChannelMembersQuery = { __typename?: 'query_root', channel: { __typename?: 'channelConnection', edges: Array<{ __typename?: 'channelEdge', node: { __typename?: 'channel', id: string, members: Array<{ __typename?: 'member_channel', id: string, lastSeenAt?: any | null, member: { __typename?: 'member', name: string, id: string } }> } }> } };

export type InsertNewMessageMutationVariables = Exact<{
  body: Scalars['String'];
  channelId: Scalars['uuid'];
  senderId: Scalars['uuid'];
  files: Array<Message_File_Insert_Input> | Message_File_Insert_Input;
}>;


export type InsertNewMessageMutation = { __typename?: 'mutation_root', insert_message_one?: (
    { __typename?: 'message' }
    & { ' $fragmentRefs'?: { 'ChannelPageMessageFragment': ChannelPageMessageFragment;'MessageItemMessageFragment': MessageItemMessageFragment } }
  ) | null };

export type MessageItemMessageFragment = { __typename?: 'message', id: string, createdAt: any, updatedAt?: any | null, body: string, parentId?: any | null, replyToId?: any | null, files: Array<{ __typename?: 'message_file', id: string, file: { __typename?: 'file', id: string, name: string, path: string, service: File_Service_Enum, type: File_Type_Enum } }>, sender: { __typename?: 'member', id: string, name: string, avatarFile?: { __typename?: 'file', id: string, path: string, service: File_Service_Enum, type: File_Type_Enum } | null } } & { ' $fragmentName'?: 'MessageItemMessageFragment' };

export const ChannelPageMessageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChannelPageMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"message"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<ChannelPageMessageFragment, unknown>;
export const MessageItemMessageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MessageItemMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"message"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"replyToId"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"service"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"service"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<MessageItemMessageFragment, unknown>;
export const GetMemberChannelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMemberChannels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"member_channel_connection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"memberId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channelId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMemberChannelsQuery, GetMemberChannelsQueryVariables>;
export const GetChannelNewMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"getChannelNewMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message_connection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"channelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChannelPageMessage"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MessageItemMessage"}}]}}]}}]}}]}},...ChannelPageMessageFragmentDoc.definitions,...MessageItemMessageFragmentDoc.definitions]} as unknown as DocumentNode<GetChannelNewMessagesSubscription, GetChannelNewMessagesSubscriptionVariables>;
export const GetChannelMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getChannelMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message_connection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"channelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChannelPageMessage"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MessageItemMessage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},...ChannelPageMessageFragmentDoc.definitions,...MessageItemMessageFragmentDoc.definitions]} as unknown as DocumentNode<GetChannelMessagesQuery, GetChannelMessagesQueryVariables>;
export const GetChannelMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getChannelMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"channel"},"name":{"kind":"Name","value":"channel_connection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastSeenAt"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetChannelMembersQuery, GetChannelMembersQueryVariables>;
export const InsertNewMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertNewMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"senderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"message_file_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_message_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"senderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"senderId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"files"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChannelPageMessage"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MessageItemMessage"}}]}}]}},...ChannelPageMessageFragmentDoc.definitions,...MessageItemMessageFragmentDoc.definitions]} as unknown as DocumentNode<InsertNewMessageMutation, InsertNewMessageMutationVariables>;