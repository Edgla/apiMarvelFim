angular.module("app").service("CharactersService", function ($http, env) {
  this.getAllCharacters = (name, offset, limit) => {
    const params = {
      apikey: "6a695d8a1b416d80a913318c6ae7fe9b",
      hash: "e0f4d953c13b04bbd52bac8478146a8d",
      ts: 1,
      offset,
      limit,
    };

    if (name != null && name != "" && name != undefined) {
      params["nameStartsWith"] = name;
    }

    return $http.get(`${env.apiUrl}/characters`, {
      params,
    });
  };
});
