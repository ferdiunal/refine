"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86204],{86204:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/antd/src/index.tsx","description":"`useForm` is used to manage forms. It uses Ant Design {@link https://ant.design/components/form/ Form} data scope management under the hood and returns the required props for managing the form actions.","displayName":"useForm","props":{"resource":{"defaultValue":{"value":"Resource name that it reads from route"},"description":"Resource name for API data interactions","name":"resource","required":false,"type":{"name":"string"},"tags":{"default":"Resource name that it reads from route"}},"id":{"defaultValue":{"value":"Id that it reads from the URL"},"description":"Record id for fetching","name":"id","required":false,"type":{"name":"[BaseKey](/docs/api-reference/core/interfaceReferences/#basekey)"},"tags":{"default":"Id that it reads from the URL"}},"redirect":{"defaultValue":{"value":"`\\"list\\"`"},"description":"Page to redirect after a succesfull mutation","name":"redirect","required":false,"type":{"name":"`\\"show\\" | \\"edit\\" | \\"list\\" | \\"create\\" | false`"},"tags":{"type":"`\\"show\\" | \\"edit\\" | \\"list\\" | \\"create\\" | false`","default":"`\\"list\\"`"}},"meta":{"defaultValue":null,"description":"Metadata query for dataProvider","name":"meta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"metaData":{"defaultValue":null,"description":"Metadata query for dataProvider","name":"metaData","required":false,"type":{"name":"MetaQuery"},"tags":{"deprecated":"`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility."}},"mutationMode":{"defaultValue":{"value":"`\\"pessimistic\\"*`"},"description":"[Determines when mutations are executed](/advanced-tutorials/mutation-mode.md)","name":"mutationMode","required":false,"type":{"name":"\\"pessimistic\\" | \\"optimistic\\" | \\"undoable\\"","raw":"MutationMode","value":[{"value":"\\"pessimistic\\""},{"value":"\\"optimistic\\""},{"value":"\\"undoable\\""}]},"tags":{"default":"`\\"pessimistic\\"*`"}},"onMutationSuccess":{"defaultValue":null,"description":"Called when a mutation is successful","name":"onMutationSuccess","required":false,"type":{"name":"((data: UpdateResponse<TData> | CreateResponse<TData>, variables: TVariables, context: any) => void)"},"tags":{}},"onMutationError":{"defaultValue":null,"description":"Called when a mutation encounters an error","name":"onMutationError","required":false,"type":{"name":"((error: TError, variables: TVariables, context: any) => void)"},"tags":{}},"undoableTimeout":{"defaultValue":{"value":"`5000*`"},"description":"Duration to wait before executing mutations when `mutationMode = \\"undoable\\"`","name":"undoableTimeout","required":false,"type":{"name":"number"},"tags":{"default":"`5000*`"}},"dataProviderName":{"defaultValue":null,"description":"If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{}},"invalidates":{"defaultValue":{"value":"`[\\"list\\", \\"many\\", \\"detail\\"]`"},"description":"You can use it to manage the invalidations that will occur at the end of the mutation.","name":"invalidates","required":false,"type":{"name":"`all`, `resourceAll`, `list`, `many`, `detail`, `false`"},"tags":{"type":"`all`, `resourceAll`, `list`, `many`, `detail`, `false`","default":"`[\\"list\\", \\"many\\", \\"detail\\"]`"}},"queryOptions":{"defaultValue":null,"description":"react-query\'s [useQuery](https://tanstack.com/query/v4/docs/reference/useQuery) options of useOne hook used while in edit mode.","name":"queryOptions","required":false,"type":{"name":"UseQueryOptions<GetOneResponse<TData>, TError, GetOneResponse<TSelectData>, QueryKey>"},"tags":{}},"createMutationOptions":{"defaultValue":null,"description":"react-query\'s [useMutation](https://tanstack.com/query/v4/docs/reference/useMutation) options of useCreate hook used while submitting in create and clone modes.","name":"createMutationOptions","required":false,"type":{"name":"Omit<UseMutationOptions<CreateResponse<TData>, TError, useCreateParams<TData, TError, TVariables>, unknown>, \\"mutationFn\\" | ... 1 more ... | \\"onSuccess\\">"},"tags":{}},"updateMutationOptions":{"defaultValue":null,"description":"react-query\'s [useMutation](https://tanstack.com/query/v4/docs/reference/useMutation) options of useUpdate hook used while submitting in edit mode.","name":"updateMutationOptions","required":false,"type":{"name":"Omit<UseMutationOptions<UpdateResponse<TData>, TError, UpdateParams<TData, TError, TVariables>, PrevContext<TData>>, \\"mutationFn\\" | ... 3 more ... | \\"onSettled\\">"},"tags":{}},"successNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((data?: UpdateResponse<TData> | CreateResponse<TData>, values?: TVariables | ... 1 more ..., resource?: string | undefined) => OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"errorNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((error?: TError, values?: TVariables | { id: BaseKey; values: TVariables; }, resource?: string | undefined) => OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"action":{"defaultValue":{"value":"Action that it reads from route otherwise \\"create\\" is used"},"description":"Type of the form mode","name":"action","required":false,"type":{"name":"\\"create\\" | \\"edit\\" | \\"clone\\"","raw":"FormAction","value":[{"value":"\\"create\\""},{"value":"\\"edit\\""},{"value":"\\"clone\\""}]},"tags":{"default":"Action that it reads from route otherwise \\"create\\" is used"}},"liveMode":{"defaultValue":{"value":"`\\"off\\"`"},"description":"Whether to update data automatically (\\"auto\\") or not (\\"manual\\") if a related live event is received. The \\"off\\" value is used to avoid creating a subscription.","name":"liveMode","required":false,"type":{"name":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`](/docs/api-reference/core/providers/live-provider/#livemode)"},"tags":{"type":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`] (/docs/api-reference/core/providers/live-provider/#livemode)","default":"`\\"off\\"`"}},"onLiveEvent":{"defaultValue":{"value":"`undefined`"},"description":"Callback to handle all related live events of this hook.","name":"onLiveEvent","required":false,"type":{"name":"[`(event: LiveEvent) => void`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`(event: LiveEvent) => void`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"liveParams":{"defaultValue":{"value":"`undefined`"},"description":"Params to pass to liveProvider\'s subscribe method if liveMode is enabled.","name":"liveParams","required":false,"type":{"name":"[`{ ids?: BaseKey[]; [key: string]: any; }`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`{ ids?: BaseKey[]; [key: string]: any; }`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"submitOnEnter":{"defaultValue":{"value":"false"},"description":"","name":"submitOnEnter","required":false,"type":{"name":"boolean"},"tags":{}},"warnWhenUnsavedChanges":{"defaultValue":null,"description":"Shows notification when unsaved changes exist","name":"warnWhenUnsavedChanges","required":false,"type":{"name":"boolean"},"tags":{}}},"generatedAt":1682357655578}')}}]);