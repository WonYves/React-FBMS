// TS中提供了ReturnType 来获取函数类型的返回值
type RootState = ReturnType<typeof import('./stroe').getState>
interface Window{
    __REDUX_DEVTOOLS_EXTENSION__: function,
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function,
}