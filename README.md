# kaholo-trigger-datadog
Kaholo Trigger for Datadog whenever a specific alert happens it will cause Kaholo's map to run.

## Method: Datadog Alert webhook
**Parameter**

1. Alert ID. 

## Note:
1. Make sure you install the webhook integraion.
2. Make sure that you configure the webhook as follows:
   - URL: <KAHOLO URL>/webhook/datadog/alert
   - Payload:
    ```{
      "body": "$EVENT_MSG",
      "last_updated": "$LAST_UPDATED",
      "event_type": "$EVENT_TYPE",
      "title": "$EVENT_TITLE",
      "date": "$DATE",
      "org": {
          "id": "$ORG_ID",
          "name": "$ORG_NAME"
      },
      "id": "$ID",
      "alertID": "$ALERT_ID"
    }
   ```

Note that you MUST supply the pageload with $ALERT_ID as described in the [webhook document](https://docs.datadoghq.com/integrations/webhooks/)

