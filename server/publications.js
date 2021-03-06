Meteor.publish("theProfiles",function(){return Profiles.find();});
Meteor.publish("theIPs",function(){return IPAddresses.find();});
Meteor.publish("theColors",function(){return Colors.find();});
Meteor.publish("theConnections",function(){return Connections.find();});


Meteor.publish("userData", function () {
  if (this.userId) {
	  return Meteor.users.find({}); //, //{_id: this.userId},
                             //{fields: {'profile': 1, 'things': 1}});
  } else {
    this.ready();
  }
});

process.env.HTTP_FORWARDED_COUNT = 1
