describe("The application controller", function () {
    var $rootScope;
    var $controller;
  beforeEach(module("myApp"));
     describe('controller: AppController', function () {
        var ctrl,item,items, Item,$scope;
var ITEM1 = {
  id: 1,
  description: 'My first item',
  checked: false,
  $remove: function(callback) {
    callback();
  }
}, ITEM2 = {
  id: 2,
  description: 'My second item',
  checked: true,
  $remove: function(callback) {
    callback();
  }
         },DESCRIPTION = "A description";
	 beforeEach(inject(function ($injector) {
         $rootScope = $injector.get('$rootScope');
         $controller= $injector.get('$controller');
            $scope = $rootScope.$new();
            Item = {
                query: function () { 
                   
                },
                save:function () {
                    $scope.result = '{"result":true}';
                },
                 update:function () {
                    $scope.result = '{"result":true}';
                },
                delete:function () {
                     $scope.result = '{"result":true}';
                }
              
            };

            spyOn(Item, 'query').and.returnValue('[{"id":1,"checked":"false","description":"dev"}]'); // <----------- HERE

            ctrl = $controller('AppController', { $scope: $scope, item: items});
        }));

        it('Should call get all()', function () {
            $scope.items = {"id":2,"checked":"false","description":"devika"}
            console.log($scope.items);     
            expect($scope.items);
        });
        
        it('Should call create', function () {
            $scope.items = {"id":2,"checked":"false","description":"devika"}
            console.log($scope.result);
            $scope.addItem($scope.item);
            expect($scope.result);
        });
        
        it('Should call update', function () {
          var changedItem = jasmine.createSpyObj('Item', ['$update']);
	  $scope.updateItem(changedItem);
	
	 expect(changedItem.$update).toHaveBeenCalled();
		});
        
        it('Should call delete', function () {
           
	  var changedItem = jasmine.createSpyObj('Item', ['$update']);
		  $scope.updateItem(changedItem);
		    
		  expect(changedItem.$update).toHaveBeenCalled();
		});
               
    });
});