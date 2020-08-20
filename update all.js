db.getCollection('vieclams').update({},
                          {$set : {
                              "status": NumberInt(0),
                              "note": "",
                              "admin_id_note": NumberInt(0),
                              }
                          },
                          {upsert:false,
                          multi:true}) 