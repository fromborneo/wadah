export declare const oauthAccountTable: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "oauth_account";
    schema: undefined;
    columns: {
        providerId: import("drizzle-orm/pg-core").PgColumn<{
            name: "provider_id";
            tableName: "oauth_account";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        providerUserId: import("drizzle-orm/pg-core").PgColumn<{
            name: "provider_user_id";
            tableName: "oauth_account";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        userId: import("drizzle-orm/pg-core").PgColumn<{
            name: "user_id";
            tableName: "oauth_account";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
//# sourceMappingURL=oauth.d.ts.map