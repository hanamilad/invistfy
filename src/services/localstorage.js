const LocalStorageService = (function () {

  var _service;

  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }

  function _setToken(tokenObj) {
    localStorage.setItem('access_token', tokenObj.access_token);
    localStorage.setItem('refresh_token', tokenObj.refresh_token);
    localStorage.setItem('token_type', tokenObj.token_type);
  }

  function _getAccessToken() {
    return localStorage.getItem('access_token');
  }

  function _getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  function _getTokenType() {
    return localStorage.getItem('token_type');
  }

  function _clearToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('token_type');
  }

  return {
    getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    getTokenType: _getTokenType,
    clearToken: _clearToken,
  };
})();

export default LocalStorageService;