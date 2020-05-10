import {request} from "./request"

export function getSortData() {
	// 左边分类数据
	return request({
		url: '/category'
	})
}

export function getSubSortData(maitKey){
	// 右上子分类数据
	return request({
		url: '/subcategory',
		params:{
			maitKey
		}
	})
}

export function getSortDetail(miniWallkey, type) {
	// 右下分类详情数据
	return request({
		url: '/subcategory/detail',
		params:{
			miniWallkey,
			type
		}
	})
}