db.getCollection('logs').aggregate([
        {
            "$group" : {
                "_id":{ "user_id": "$user_id","category_id":"$category_id"}
            }
        },
        {
            "$group" : {
                "_id":"$_id.user_id",
                "distinctCategoryCount": { "$sum": 1 }
            }
        },
        {
            "$sort" :{ distinctCategoryCount: -1}
        }
        ])