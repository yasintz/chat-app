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
  timestamptz: any;
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
export type App = {
  __typename?: 'app';
  /** An array relationship */
  channels: Array<Channel>;
  /** An aggregate relationship */
  channels_aggregate: Channel_Aggregate;
  /** An array relationship */
  customers: Array<Customer>;
  /** An aggregate relationship */
  customers_aggregate: Customer_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  members: Array<Member>;
  /** An aggregate relationship */
  members_aggregate: Member_Aggregate;
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

/** aggregated selection of "app" */
export type App_Aggregate = {
  __typename?: 'app_aggregate';
  aggregate?: Maybe<App_Aggregate_Fields>;
  nodes: Array<App>;
};

/** aggregate fields of "app" */
export type App_Aggregate_Fields = {
  __typename?: 'app_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_Max_Fields>;
  min?: Maybe<App_Min_Fields>;
};


/** aggregate fields of "app" */
export type App_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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
  members?: InputMaybe<Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Member_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app" */
export enum App_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppPkey = 'app_pkey'
}

/** input type for inserting data into table "app" */
export type App_Insert_Input = {
  channels?: InputMaybe<Channel_Arr_Rel_Insert_Input>;
  customers?: InputMaybe<Customer_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  members?: InputMaybe<Member_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_Max_Fields = {
  __typename?: 'app_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type App_Min_Fields = {
  __typename?: 'app_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
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
  members_aggregate?: InputMaybe<Member_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app */
export type App_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "app" */
export enum App_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "app" */
export type App_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "app" */
export type App_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app" */
export enum App_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type App_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Set_Input>;
  where: App_Bool_Exp;
};

/** columns and relationships of "channel" */
export type Channel = {
  __typename?: 'channel';
  /** An object relationship */
  app: App;
  app_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  deleted_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  member_channels: Array<Member_Channel>;
  /** An aggregate relationship */
  member_channels_aggregate: Member_Channel_Aggregate;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "channel" */
export type ChannelMember_ChannelsArgs = {
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


/** columns and relationships of "channel" */
export type ChannelMember_Channels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
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
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member_channels?: InputMaybe<Member_Channel_Bool_Exp>;
  member_channels_aggregate?: InputMaybe<Member_Channel_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel" */
export enum Channel_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChannelPkey = 'channel_pkey'
}

/** input type for inserting data into table "channel" */
export type Channel_Insert_Input = {
  app?: InputMaybe<App_Obj_Rel_Insert_Input>;
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  member_channels?: InputMaybe<Member_Channel_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Channel_Max_Fields = {
  __typename?: 'channel_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "channel" */
export type Channel_Max_Order_By = {
  app_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Min_Fields = {
  __typename?: 'channel_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "channel" */
export type Channel_Min_Order_By = {
  app_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  app_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_channels_aggregate?: InputMaybe<Member_Channel_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: channel */
export type Channel_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "channel" */
export enum Channel_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "channel" */
export type Channel_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "channel" */
export type Channel_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Channel_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Channel_Stream_Cursor_Value_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "channel" */
export enum Channel_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Channel_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Channel_Set_Input>;
  where: Channel_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "customer" */
export type Customer = {
  __typename?: 'customer';
  /** An object relationship */
  app: App;
  appId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  email: Scalars['String'];
  encrypted_password: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['uuid'];
  lastName: Scalars['String'];
  password_salt: Scalars['String'];
  role: Customer_Role_Enum;
  updatedAt: Scalars['timestamptz'];
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
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  encrypted_password?: InputMaybe<String_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  password_salt?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Customer_Role_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
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
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  password_salt?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Customer_Role_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Customer_Max_Fields = {
  __typename?: 'customer_max_fields';
  appId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  password_salt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "customer" */
export type Customer_Max_Order_By = {
  appId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  encrypted_password?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  password_salt?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Customer_Min_Fields = {
  __typename?: 'customer_min_fields';
  appId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  password_salt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "customer" */
export type Customer_Min_Order_By = {
  appId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  encrypted_password?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  password_salt?: InputMaybe<Order_By>;
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
  encrypted_password?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  password_salt?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customer */
export type Customer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "customer_role" */
export type Customer_Role = {
  __typename?: 'customer_role';
  value: Scalars['String'];
};

/** aggregated selection of "customer_role" */
export type Customer_Role_Aggregate = {
  __typename?: 'customer_role_aggregate';
  aggregate?: Maybe<Customer_Role_Aggregate_Fields>;
  nodes: Array<Customer_Role>;
};

/** aggregate fields of "customer_role" */
export type Customer_Role_Aggregate_Fields = {
  __typename?: 'customer_role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customer_Role_Max_Fields>;
  min?: Maybe<Customer_Role_Min_Fields>;
};


/** aggregate fields of "customer_role" */
export type Customer_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** aggregate max on columns */
export type Customer_Role_Max_Fields = {
  __typename?: 'customer_role_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Customer_Role_Min_Fields = {
  __typename?: 'customer_role_min_fields';
  value?: Maybe<Scalars['String']>;
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

/** Streaming cursor of the table "customer_role" */
export type Customer_Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Role_Stream_Cursor_Value_Input = {
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
  EncryptedPassword = 'encrypted_password',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  PasswordSalt = 'password_salt',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "customer" */
export type Customer_Set_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  password_salt?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Customer_Role_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "customer" */
export type Customer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Stream_Cursor_Value_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  password_salt?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Customer_Role_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
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
  EncryptedPassword = 'encrypted_password',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  PasswordSalt = 'password_salt',
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
export type File = {
  __typename?: 'file';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  file_service: File_Service;
  id: Scalars['uuid'];
  /** An array relationship */
  member_files: Array<Member_File>;
  /** An aggregate relationship */
  member_files_aggregate: Member_File_Aggregate;
  name: Scalars['String'];
  path: Scalars['String'];
  service: File_Service_Enum;
  updated_at: Scalars['timestamptz'];
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

/** aggregated selection of "file" */
export type File_Aggregate = {
  __typename?: 'file_aggregate';
  aggregate?: Maybe<File_Aggregate_Fields>;
  nodes: Array<File>;
};

/** aggregate fields of "file" */
export type File_Aggregate_Fields = {
  __typename?: 'file_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<File_Max_Fields>;
  min?: Maybe<File_Min_Fields>;
};


/** aggregate fields of "file" */
export type File_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "file". All fields are combined with a logical 'AND'. */
export type File_Bool_Exp = {
  _and?: InputMaybe<Array<File_Bool_Exp>>;
  _not?: InputMaybe<File_Bool_Exp>;
  _or?: InputMaybe<Array<File_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  file_service?: InputMaybe<File_Service_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member_files?: InputMaybe<Member_File_Bool_Exp>;
  member_files_aggregate?: InputMaybe<Member_File_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  service?: InputMaybe<File_Service_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "file" */
export enum File_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilePkey = 'file_pkey'
}

/** input type for inserting data into table "file" */
export type File_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  file_service?: InputMaybe<File_Service_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  member_files?: InputMaybe<Member_File_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<File_Service_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type File_Max_Fields = {
  __typename?: 'file_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type File_Min_Fields = {
  __typename?: 'file_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
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
  created_at?: InputMaybe<Order_By>;
  file_service?: InputMaybe<File_Service_Order_By>;
  id?: InputMaybe<Order_By>;
  member_files_aggregate?: InputMaybe<Member_File_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  service?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: file */
export type File_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "file" */
export enum File_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Path = 'path',
  /** column name */
  Service = 'service',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "file_service" */
export type File_Service = {
  __typename?: 'file_service';
  value: Scalars['String'];
};

/** aggregated selection of "file_service" */
export type File_Service_Aggregate = {
  __typename?: 'file_service_aggregate';
  aggregate?: Maybe<File_Service_Aggregate_Fields>;
  nodes: Array<File_Service>;
};

/** aggregate fields of "file_service" */
export type File_Service_Aggregate_Fields = {
  __typename?: 'file_service_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<File_Service_Max_Fields>;
  min?: Maybe<File_Service_Min_Fields>;
};


/** aggregate fields of "file_service" */
export type File_Service_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<File_Service_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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
  Cloudinary = 'cloudinary'
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

/** aggregate max on columns */
export type File_Service_Max_Fields = {
  __typename?: 'file_service_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type File_Service_Min_Fields = {
  __typename?: 'file_service_min_fields';
  value?: Maybe<Scalars['String']>;
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

/** Streaming cursor of the table "file_service" */
export type File_Service_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: File_Service_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type File_Service_Stream_Cursor_Value_Input = {
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
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<File_Service_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "file" */
export type File_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: File_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type File_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<File_Service_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "file" */
export enum File_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Path = 'path',
  /** column name */
  Service = 'service',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type File_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<File_Set_Input>;
  where: File_Bool_Exp;
};

/** columns and relationships of "member" */
export type Member = {
  __typename?: 'member';
  /** An object relationship */
  app: App;
  app_id: Scalars['uuid'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name: Scalars['String'];
  /** An array relationship */
  member_channels: Array<Member_Channel>;
  /** An aggregate relationship */
  member_channels_aggregate: Member_Channel_Aggregate;
  /** An array relationship */
  member_files: Array<Member_File>;
  /** An aggregate relationship */
  member_files_aggregate: Member_File_Aggregate;
};


/** columns and relationships of "member" */
export type MemberMember_ChannelsArgs = {
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberMember_Channels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberMember_FilesArgs = {
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberMember_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
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
  app?: InputMaybe<App_Bool_Exp>;
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  member_channels?: InputMaybe<Member_Channel_Bool_Exp>;
  member_channels_aggregate?: InputMaybe<Member_Channel_Aggregate_Bool_Exp>;
  member_files?: InputMaybe<Member_File_Bool_Exp>;
  member_files_aggregate?: InputMaybe<Member_File_Aggregate_Bool_Exp>;
};

/** columns and relationships of "member_channel" */
export type Member_Channel = {
  __typename?: 'member_channel';
  /** An object relationship */
  channel: Channel;
  channel_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  member: Member;
  member_id: Scalars['uuid'];
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
  channel_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  member_id?: InputMaybe<Uuid_Comparison_Exp>;
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
  channel_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  member_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Member_Channel_Max_Fields = {
  __typename?: 'member_channel_max_fields';
  channel_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  member_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "member_channel" */
export type Member_Channel_Max_Order_By = {
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_Channel_Min_Fields = {
  __typename?: 'member_channel_min_fields';
  channel_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  member_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "member_channel" */
export type Member_Channel_Min_Order_By = {
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
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
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  member_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_channel */
export type Member_Channel_Pk_Columns_Input = {
  channel_id: Scalars['uuid'];
  member_id: Scalars['uuid'];
};

/** select columns of table "member_channel" */
export enum Member_Channel_Select_Column {
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id'
}

/** input type for updating data in table "member_channel" */
export type Member_Channel_Set_Input = {
  channel_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  member_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "member_channel" */
export type Member_Channel_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Channel_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Channel_Stream_Cursor_Value_Input = {
  channel_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  member_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "member_channel" */
export enum Member_Channel_Update_Column {
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id'
}

export type Member_Channel_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Channel_Set_Input>;
  where: Member_Channel_Bool_Exp;
};

/** unique or primary key constraints on table "member" */
export enum Member_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberPkey = 'member_pkey'
}

/** columns and relationships of "member_file" */
export type Member_File = {
  __typename?: 'member_file';
  /** An object relationship */
  file: File;
  file_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  member: Member;
  member_id: Scalars['uuid'];
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
  file_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  member_id?: InputMaybe<Uuid_Comparison_Exp>;
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
  file_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  member_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Member_File_Max_Fields = {
  __typename?: 'member_file_max_fields';
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  member_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "member_file" */
export type Member_File_Max_Order_By = {
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_File_Min_Fields = {
  __typename?: 'member_file_min_fields';
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  member_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "member_file" */
export type Member_File_Min_Order_By = {
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
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
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  member_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_file */
export type Member_File_Pk_Columns_Input = {
  file_id: Scalars['uuid'];
  member_id: Scalars['uuid'];
};

/** select columns of table "member_file" */
export enum Member_File_Select_Column {
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id'
}

/** input type for updating data in table "member_file" */
export type Member_File_Set_Input = {
  file_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  member_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "member_file" */
export type Member_File_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_File_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_File_Stream_Cursor_Value_Input = {
  file_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  member_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "member_file" */
export enum Member_File_Update_Column {
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id'
}

export type Member_File_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_File_Set_Input>;
  where: Member_File_Bool_Exp;
};

/** input type for inserting data into table "member" */
export type Member_Insert_Input = {
  app?: InputMaybe<App_Obj_Rel_Insert_Input>;
  app_id?: InputMaybe<Scalars['uuid']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  member_channels?: InputMaybe<Member_Channel_Arr_Rel_Insert_Input>;
  member_files?: InputMaybe<Member_File_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Member_Max_Fields = {
  __typename?: 'member_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "member" */
export type Member_Max_Order_By = {
  app_id?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_Min_Fields = {
  __typename?: 'member_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "member" */
export type Member_Min_Order_By = {
  app_id?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
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
  app?: InputMaybe<App_Order_By>;
  app_id?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  member_channels_aggregate?: InputMaybe<Member_Channel_Aggregate_Order_By>;
  member_files_aggregate?: InputMaybe<Member_File_Aggregate_Order_By>;
};

/** primary key columns input for table: member */
export type Member_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "member" */
export enum Member_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "member" */
export type Member_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "member" */
export type Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Stream_Cursor_Value_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "member" */
export enum Member_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

export type Member_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Set_Input>;
  where: Member_Bool_Exp;
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
  channel_id: Scalars['uuid'];
  member_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Member_FileArgs = {
  where: Member_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_File_By_PkArgs = {
  file_id: Scalars['uuid'];
  member_id: Scalars['uuid'];
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
export type Mutation_RootUpdate_AppArgs = {
  _set?: InputMaybe<App_Set_Input>;
  where: App_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_By_PkArgs = {
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
  app: Array<App>;
  /** fetch aggregated fields from the table: "app" */
  app_aggregate: App_Aggregate;
  /** fetch data from the table: "app" using primary key columns */
  app_by_pk?: Maybe<App>;
  /** fetch data from the table: "channel" */
  channel: Array<Channel>;
  /** fetch aggregated fields from the table: "channel" */
  channel_aggregate: Channel_Aggregate;
  /** fetch data from the table: "channel" using primary key columns */
  channel_by_pk?: Maybe<Channel>;
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** fetch data from the table: "customer_role" */
  customer_role: Array<Customer_Role>;
  /** fetch aggregated fields from the table: "customer_role" */
  customer_role_aggregate: Customer_Role_Aggregate;
  /** fetch data from the table: "customer_role" using primary key columns */
  customer_role_by_pk?: Maybe<Customer_Role>;
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  file_aggregate: File_Aggregate;
  /** fetch data from the table: "file" using primary key columns */
  file_by_pk?: Maybe<File>;
  /** fetch data from the table: "file_service" */
  file_service: Array<File_Service>;
  /** fetch aggregated fields from the table: "file_service" */
  file_service_aggregate: File_Service_Aggregate;
  /** fetch data from the table: "file_service" using primary key columns */
  file_service_by_pk?: Maybe<File_Service>;
  /** fetch data from the table: "member" */
  member: Array<Member>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: Member_Aggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<Member>;
  /** fetch data from the table: "member_channel" */
  member_channel: Array<Member_Channel>;
  /** fetch aggregated fields from the table: "member_channel" */
  member_channel_aggregate: Member_Channel_Aggregate;
  /** fetch data from the table: "member_channel" using primary key columns */
  member_channel_by_pk?: Maybe<Member_Channel>;
  /** fetch data from the table: "member_file" */
  member_file: Array<Member_File>;
  /** fetch aggregated fields from the table: "member_file" */
  member_file_aggregate: Member_File_Aggregate;
  /** fetch data from the table: "member_file" using primary key columns */
  member_file_by_pk?: Maybe<Member_File>;
};


export type Query_RootAppArgs = {
  distinct_on?: InputMaybe<Array<App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Order_By>>;
  where?: InputMaybe<App_Bool_Exp>;
};


export type Query_RootApp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Order_By>>;
  where?: InputMaybe<App_Bool_Exp>;
};


export type Query_RootApp_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootChannelArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Query_RootChannel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Query_RootChannel_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCustomer_RoleArgs = {
  distinct_on?: InputMaybe<Array<Customer_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Role_Order_By>>;
  where?: InputMaybe<Customer_Role_Bool_Exp>;
};


export type Query_RootCustomer_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Role_Order_By>>;
  where?: InputMaybe<Customer_Role_Bool_Exp>;
};


export type Query_RootCustomer_Role_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootFileArgs = {
  distinct_on?: InputMaybe<Array<File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Order_By>>;
  where?: InputMaybe<File_Bool_Exp>;
};


export type Query_RootFile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Order_By>>;
  where?: InputMaybe<File_Bool_Exp>;
};


export type Query_RootFile_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFile_ServiceArgs = {
  distinct_on?: InputMaybe<Array<File_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Service_Order_By>>;
  where?: InputMaybe<File_Service_Bool_Exp>;
};


export type Query_RootFile_Service_AggregateArgs = {
  distinct_on?: InputMaybe<Array<File_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Service_Order_By>>;
  where?: InputMaybe<File_Service_Bool_Exp>;
};


export type Query_RootFile_Service_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootMemberArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMember_ChannelArgs = {
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


export type Query_RootMember_Channel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


export type Query_RootMember_Channel_By_PkArgs = {
  channel_id: Scalars['uuid'];
  member_id: Scalars['uuid'];
};


export type Query_RootMember_FileArgs = {
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


export type Query_RootMember_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


export type Query_RootMember_File_By_PkArgs = {
  file_id: Scalars['uuid'];
  member_id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "app" */
  app: Array<App>;
  /** fetch aggregated fields from the table: "app" */
  app_aggregate: App_Aggregate;
  /** fetch data from the table: "app" using primary key columns */
  app_by_pk?: Maybe<App>;
  /** fetch data from the table in a streaming manner: "app" */
  app_stream: Array<App>;
  /** fetch data from the table: "channel" */
  channel: Array<Channel>;
  /** fetch aggregated fields from the table: "channel" */
  channel_aggregate: Channel_Aggregate;
  /** fetch data from the table: "channel" using primary key columns */
  channel_by_pk?: Maybe<Channel>;
  /** fetch data from the table in a streaming manner: "channel" */
  channel_stream: Array<Channel>;
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** fetch data from the table: "customer_role" */
  customer_role: Array<Customer_Role>;
  /** fetch aggregated fields from the table: "customer_role" */
  customer_role_aggregate: Customer_Role_Aggregate;
  /** fetch data from the table: "customer_role" using primary key columns */
  customer_role_by_pk?: Maybe<Customer_Role>;
  /** fetch data from the table in a streaming manner: "customer_role" */
  customer_role_stream: Array<Customer_Role>;
  /** fetch data from the table in a streaming manner: "customer" */
  customer_stream: Array<Customer>;
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  file_aggregate: File_Aggregate;
  /** fetch data from the table: "file" using primary key columns */
  file_by_pk?: Maybe<File>;
  /** fetch data from the table: "file_service" */
  file_service: Array<File_Service>;
  /** fetch aggregated fields from the table: "file_service" */
  file_service_aggregate: File_Service_Aggregate;
  /** fetch data from the table: "file_service" using primary key columns */
  file_service_by_pk?: Maybe<File_Service>;
  /** fetch data from the table in a streaming manner: "file_service" */
  file_service_stream: Array<File_Service>;
  /** fetch data from the table in a streaming manner: "file" */
  file_stream: Array<File>;
  /** fetch data from the table: "member" */
  member: Array<Member>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: Member_Aggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<Member>;
  /** fetch data from the table: "member_channel" */
  member_channel: Array<Member_Channel>;
  /** fetch aggregated fields from the table: "member_channel" */
  member_channel_aggregate: Member_Channel_Aggregate;
  /** fetch data from the table: "member_channel" using primary key columns */
  member_channel_by_pk?: Maybe<Member_Channel>;
  /** fetch data from the table in a streaming manner: "member_channel" */
  member_channel_stream: Array<Member_Channel>;
  /** fetch data from the table: "member_file" */
  member_file: Array<Member_File>;
  /** fetch aggregated fields from the table: "member_file" */
  member_file_aggregate: Member_File_Aggregate;
  /** fetch data from the table: "member_file" using primary key columns */
  member_file_by_pk?: Maybe<Member_File>;
  /** fetch data from the table in a streaming manner: "member_file" */
  member_file_stream: Array<Member_File>;
  /** fetch data from the table in a streaming manner: "member" */
  member_stream: Array<Member>;
};


export type Subscription_RootAppArgs = {
  distinct_on?: InputMaybe<Array<App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Order_By>>;
  where?: InputMaybe<App_Bool_Exp>;
};


export type Subscription_RootApp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Order_By>>;
  where?: InputMaybe<App_Bool_Exp>;
};


export type Subscription_RootApp_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootApp_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_Stream_Cursor_Input>>;
  where?: InputMaybe<App_Bool_Exp>;
};


export type Subscription_RootChannelArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Subscription_RootChannel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Subscription_RootChannel_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChannel_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Channel_Stream_Cursor_Input>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Subscription_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCustomer_RoleArgs = {
  distinct_on?: InputMaybe<Array<Customer_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Role_Order_By>>;
  where?: InputMaybe<Customer_Role_Bool_Exp>;
};


export type Subscription_RootCustomer_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Role_Order_By>>;
  where?: InputMaybe<Customer_Role_Bool_Exp>;
};


export type Subscription_RootCustomer_Role_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCustomer_Role_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Customer_Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_Role_Bool_Exp>;
};


export type Subscription_RootCustomer_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Customer_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  distinct_on?: InputMaybe<Array<File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Order_By>>;
  where?: InputMaybe<File_Bool_Exp>;
};


export type Subscription_RootFile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Order_By>>;
  where?: InputMaybe<File_Bool_Exp>;
};


export type Subscription_RootFile_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFile_ServiceArgs = {
  distinct_on?: InputMaybe<Array<File_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Service_Order_By>>;
  where?: InputMaybe<File_Service_Bool_Exp>;
};


export type Subscription_RootFile_Service_AggregateArgs = {
  distinct_on?: InputMaybe<Array<File_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Service_Order_By>>;
  where?: InputMaybe<File_Service_Bool_Exp>;
};


export type Subscription_RootFile_Service_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootFile_Service_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<File_Service_Stream_Cursor_Input>>;
  where?: InputMaybe<File_Service_Bool_Exp>;
};


export type Subscription_RootFile_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<File_Stream_Cursor_Input>>;
  where?: InputMaybe<File_Bool_Exp>;
};


export type Subscription_RootMemberArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMember_ChannelArgs = {
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


export type Subscription_RootMember_Channel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Channel_Order_By>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


export type Subscription_RootMember_Channel_By_PkArgs = {
  channel_id: Scalars['uuid'];
  member_id: Scalars['uuid'];
};


export type Subscription_RootMember_Channel_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Member_Channel_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Channel_Bool_Exp>;
};


export type Subscription_RootMember_FileArgs = {
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


export type Subscription_RootMember_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_File_Order_By>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


export type Subscription_RootMember_File_By_PkArgs = {
  file_id: Scalars['uuid'];
  member_id: Scalars['uuid'];
};


export type Subscription_RootMember_File_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Member_File_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_File_Bool_Exp>;
};


export type Subscription_RootMember_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
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

export type AppListQueryVariables = Exact<{ [key: string]: never; }>;


export type AppListQuery = { __typename?: 'query_root', app: Array<{ __typename?: 'app', id: any }> };


export const AppListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AppList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"app"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AppListQuery, AppListQueryVariables>;