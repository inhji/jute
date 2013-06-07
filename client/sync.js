var sProps = this.sProps = {}

sProps.create = function (id) {
	if (!sProps.exists(id)) {
		syncProps.insert({userId: id});
		return true;
	}else{
		return false;
	}
}

sProps.get = function (id) {
	if (!sProps.exists(id)) return false;

	var props = syncProps.findOne({userId: id});
	return props;
}

sProps.getOne = function (id, key) {
	if (!sProps.exists(id)) return false;

	var props = syncProps.findOne({userId: id});

	if (props[key]) {
		return props[key];
	}else{
		return false;
	}
}

sProps.set = function (id, key, val) {
	if (!sProps.exists(id)) return false;

	var value = {};
	var p = sProps.get(id);

	value[key] = val;
	syncProps.update(p._id, {$set: value});
	return true;
}

sProps.delete = function (id) {
	var p = sProps.get(id);
	syncProps.remove(p._id);
}

sProps.exists = function (id) {
	var i = syncProps.findOne({userId: id});
	return ((i !== undefined) ? true : false);
}