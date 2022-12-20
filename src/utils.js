

function fn(impl = () => { }) {
    const mockFn = (...args) => {
        mockFn.mock.calls.push(args)  
        
        return impl(...args) 
    }
    mockFn.mock = {
        calls:[]
    }

    return mockFn


}


const utilsPath = require.resolve("~/utils")

require.cache[utilsPath] = {
    id: utilsPath,
    filename: utilsPath,
    loaded: true,
    exports: {
        getWinner: fn((p1,p2)=> p1)
    }
}
