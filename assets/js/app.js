$(document).ready(function(){
	var imageSrcArray = ['//www.shirtsmyway.com/graphics/reference/fabrics/smallphoto/c11_reference_fabrics_smallphoto.jpg','//www.shirtsmyway.com/graphics/reference/fabrics/smallphoto/c10_reference_fabrics_smallphoto.jpg'];

	var shirtBitsImageArray = ['//www.shirtsmyway.com/graphics/view1/base/tail/c9_view1_base_tail.gif','//www.shirtsmyway.com/graphics/view1/collar/classic/collar/c9_view1_collar_classic_collar.gif','//www.shirtsmyway.com/graphics/view1/placket/placket/standard/c9_view1_placket_placket_standard.gif','//www.shirtsmyway.com/graphics/view1/innerback/c9_view1_innerback.gif','//www.shirtsmyway.com/graphics/view1/pocket/pocket/angle/c9_view1_pocket_pocket_angle.gif','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/c9_view1_cuffs_right_cuffs.gif','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/c9_view1_cuffs_left_1buttonangle_cuffs.gif','//www.shirtsmyway.com/graphics/view1/base/tail/c11_view1_base_tail.gif','//www.shirtsmyway.com/graphics/view1/innerback/c11_view1_innerback.gif','//www.shirtsmyway.com/graphics/view1/sleeves/long/c11_view1_sleeves_long.gif','//www.shirtsmyway.com/graphics/view1/pocket/pocket/angle/c11_view1_pocket_pocket_angle.gif','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/c11_view1_cuffs_left_1buttonangle_cuffs.gif','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/c11_view1_cuffs_left_1buttonangle_innercuffs.gif','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/c11_view1_cuffs_right_cuffs.gif','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/c11_view1_cuffs_right_innercuffs.gif','//www.shirtsmyway.com/graphics/view1/placket/placket/standard/c11_view1_placket_placket_standard.gif','//www.shirtsmyway.com/graphics/view1/collar/classic/collar/c11_view1_collar_classic_collar.gif','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/c11_view1_collar_classic_innercollar.gif','//www.shirtsmyway.com/graphics/view1/base/tail/c10_view1_base_tail.gif','//www.shirtsmyway.com/graphics/view1/innerback/c10_view1_innerback.gif','//www.shirtsmyway.com/graphics/view1/sleeves/long/c10_view1_sleeves_long.gif','//www.shirtsmyway.com/graphics/view1/pocket/pocket/angle/c10_view1_pocket_pocket_angle.gif','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/c10_view1_cuffs_left_1buttonangle_cuffs.gif','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/c10_view1_cuffs_left_1buttonangle_innercuffs.gif','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/c10_view1_cuffs_right_cuffs.gif','//www.shirtsmyway.com/graphics/view1/placket/placket/standard/c10_view1_placket_placket_standard.gif','//www.shirtsmyway.com/graphics/view1/collar/classic/collar/c10_view1_collar_classic_collar.gif','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/c10_view1_collar_classic_innercollar.gif'];
	
	var referenceValue = '';

	$('[data-toggle="popover"]').popover({
        placement : 'left',
        trigger : 'hover'
    });
	
	$('.fabricSample').click(function(e){
		e.preventDefault();
		var imgSrc = $(this).attr('src').substr(58,3);
		console.log(imgSrc);
		referenceValue = imgSrc;
		//console.log('imgSrc',imgSrc.substring(58,2));
		for(var imagesrc in imageSrcArray){
			//console.log(imageSrcArray[imagesrc]);
			if(imageSrcArray[imagesrc].search(imgSrc) != -1 ){
				$('.refFabric').attr('src',imageSrcArray[imagesrc]);
			}
		}
	});

	$('.apply_button').click(function(e){
		var selectedDropDownVal = $("#applyFilter").val();
		var refFrabricValue = $('.refFabric').attr('src');
		var refSmallPhoto = refFrabricValue.substr(60,3);
		var indexValue = '';
		if(referenceValue.search('_') != -1){
			indexValue = referenceValue;
		} else {
			indexValue = referenceValue+'_';
		}
		if(referenceValue == refSmallPhoto){
			switch(selectedDropDownVal){
				case 'base':
					for(var shirtBit in shirtBitsImageArray){
						if(shirtBitsImageArray[shirtBit].search('base') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							console.log(shirtBitsImageArray[shirtBit]);
							$('.base').attr('src',shirtBitsImageArray[shirtBit]);
							$('.longsleeves').attr('src','//www.shirtsmyway.com/graphics/view1/sleeves/long/'+indexValue+'view1_sleeves_long.gif');
							$('.innerback').attr('src','//www.shirtsmyway.com/graphics/view1/innerback/'+indexValue+'view1_innerback.gif');

						}
					}
				break;
				case 'collar':
					for(var shirtBit in shirtBitsImageArray){
						if(shirtBitsImageArray[shirtBit].search('collar') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('/classic/collar/') != -1){
								console.log(shirtBitsImageArray[shirtBit]);
								$('.collar').attr('src',shirtBitsImageArray[shirtBit]);
							}
							if(shirtBitsImageArray[shirtBit].search('/classic/innercollar/') != -1){
								$('.innercollar').attr('src','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/'+indexValue+'view1_collar_classic_innercollar.gif');
							}
						}
					}
				break;
				case 'placket':
					for(var shirtBit in shirtBitsImageArray){
						if(shirtBitsImageArray[shirtBit].search('placket') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							$('.placket').attr('src',shirtBitsImageArray[shirtBit]);
							//$('.innercollar').attr('src','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/c9_view1_collar_classic_innercollar.gif');
						}
					}
				break;
				case 'pocket':
					for(var shirtBit in shirtBitsImageArray){
						if(shirtBitsImageArray[shirtBit].search('pocket') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							$('.pocket').attr('src',shirtBitsImageArray[shirtBit]);
							//$('.innercollar').attr('src','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/c9_view1_collar_classic_innercollar.gif');
						}
					}
				break;
				case 'cuffs':
					for(var shirtBit in shirtBitsImageArray){
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/'+indexValue+'view1_cuffs_left_1buttonangle_cuffs.gif');
								$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/'+indexValue+'view1_cuffs_right_cuffs.gif');
								$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
							}
						}
					}
				break;
				case 'innerCuffs':
					for(var shirtBit in shirtBitsImageArray){
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								//$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/c9_view1_cuffs_left_1buttonangle_cuffs.gif');
								$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								//$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/c9_view1_cuffs_right_cuffs.gif');
								$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
							}
						}
					}
				break;
				case 'leftCuffs':
					for(var shirtBit in shirtBitsImageArray){
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/'+indexValue+'view1_cuffs_left_1buttonangle_cuffs.gif');
								//$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/c9_view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
						}
					}
				break;
				case 'rightCuffs':
					for(var shirtBit in shirtBitsImageArray){
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/'+indexValue+'view1_cuffs_right_cuffs.gif');
								//$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/c9_view1_cuffs_right_innercuffs.gif');
							}
						}
					}
				break;
				case 'leftInnerCuffs':
					for(var shirtBit in shirtBitsImageArray){
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								//$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/c9_view1_cuffs_left_1buttonangle_cuffs.gif');
								$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
						}
					}
				break;
				case 'rightInnerCuffs':
					for(var shirtBit in shirtBitsImageArray){
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								//$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/c9_view1_cuffs_right_cuffs.gif');
								$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
							}
						}
					}
				break;
				case 'all':
				for(var shirtBit in shirtBitsImageArray){
						if(shirtBitsImageArray[shirtBit].search('base') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							$('.base').attr('src',shirtBitsImageArray[shirtBit]);
							$('.longsleeves').attr('src','//www.shirtsmyway.com/graphics/view1/sleeves/long/'+indexValue+'view1_sleeves_long.gif');
							$('.innerback').attr('src','//www.shirtsmyway.com/graphics/view1/innerback/'+indexValue+'view1_innerback.gif');

						}
						if(shirtBitsImageArray[shirtBit].search('collar') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('/classic/collar/') != -1){
								console.log(shirtBitsImageArray[shirtBit]);
								$('.collar').attr('src',shirtBitsImageArray[shirtBit]);
							}
							if(shirtBitsImageArray[shirtBit].search('/classic/innercollar/') != -1){
								$('.innercollar').attr('src','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/'+indexValue+'view1_collar_classic_innercollar.gif');
							}
						}
						if(shirtBitsImageArray[shirtBit].search('placket') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							$('.placket').attr('src',shirtBitsImageArray[shirtBit]);
							//$('.innercollar').attr('src','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/c9_view1_collar_classic_innercollar.gif');
						}
						if(shirtBitsImageArray[shirtBit].search('pocket') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							$('.pocket').attr('src',shirtBitsImageArray[shirtBit]);
							//$('.innercollar').attr('src','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/c9_view1_collar_classic_innercollar.gif');
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/'+indexValue+'view1_cuffs_left_1buttonangle_cuffs.gif');
								$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/'+indexValue+'view1_cuffs_right_cuffs.gif');
								$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
							}
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/'+indexValue+'view1_cuffs_left_1buttonangle_cuffs.gif');
								$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/'+indexValue+'view1_cuffs_right_cuffs.gif');
								$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
							}
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								//$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/c9_view1_cuffs_left_1buttonangle_cuffs.gif');
								$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								//$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/c9_view1_cuffs_right_cuffs.gif');
								$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
							}
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/'+indexValue+'view1_cuffs_left_1buttonangle_cuffs.gif');
								//$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/c9_view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/'+indexValue+'view1_cuffs_right_cuffs.gif');
								//$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/c9_view1_cuffs_right_innercuffs.gif');
							}
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								//$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/c9_view1_cuffs_left_1buttonangle_cuffs.gif');
								$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								//$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/c9_view1_cuffs_right_cuffs.gif');
								$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
							}
						}
					}
				break;
				default:
				break;
					
			}
		}
	});

	$('.fabricSample').click(function(e){
		e.preventDefault();
		//$()
		var referenceValue = $(this).attr('src').substr(58,3);
		console.log(referenceValue);
		var indexValue = referenceValue+'_';
		var selectedSegment = $('.panel-content .hiddenTextBox').val();
		switch(selectedSegment){
			case 'base':
				for(var shirtBit in shirtBitsImageArray){
					if(shirtBitsImageArray[shirtBit].search('base') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
						console.log(shirtBitsImageArray[shirtBit]);
						$('.base').attr('src',shirtBitsImageArray[shirtBit]);
						$('.longsleeves').attr('src','//www.shirtsmyway.com/graphics/view1/sleeves/long/'+indexValue+'view1_sleeves_long.gif');
						$('.innerback').attr('src','//www.shirtsmyway.com/graphics/view1/innerback/'+indexValue+'view1_innerback.gif');

					}
				}
			break;
			case 'collar':
				for(var shirtBit in shirtBitsImageArray){
					if(shirtBitsImageArray[shirtBit].search('collar') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
						if(shirtBitsImageArray[shirtBit].search('/classic/collar/') != -1){
							console.log(shirtBitsImageArray[shirtBit]);
							$('.collar').attr('src',shirtBitsImageArray[shirtBit]);
						}
						if(shirtBitsImageArray[shirtBit].search('/classic/innercollar/') != -1){
							$('.innercollar').attr('src','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/'+indexValue+'view1_collar_classic_innercollar.gif');
						}
					}
				}
			break;
			case 'placket':
				for(var shirtBit in shirtBitsImageArray){
					if(shirtBitsImageArray[shirtBit].search('placket') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
						$('.placket').attr('src',shirtBitsImageArray[shirtBit]);
						//$('.innercollar').attr('src','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/c9_view1_collar_classic_innercollar.gif');
					}
				}
			break;
			case 'pocket':
				for(var shirtBit in shirtBitsImageArray){
					if(shirtBitsImageArray[shirtBit].search('pocket') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
						$('.pocket').attr('src',shirtBitsImageArray[shirtBit]);
						//$('.innercollar').attr('src','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/c9_view1_collar_classic_innercollar.gif');
					}
				}
			break;
			case 'cuffs':
				for(var shirtBit in shirtBitsImageArray){
					if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
						if(shirtBitsImageArray[shirtBit].search('left') != -1){
							$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/'+indexValue+'view1_cuffs_left_1buttonangle_cuffs.gif');
							$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
						} 
						if(shirtBitsImageArray[shirtBit].search('right') != -1){
							$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/'+indexValue+'view1_cuffs_right_cuffs.gif');
							$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
						}
					}
				}
			break;
			case 'innerCuffs':
				for(var shirtBit in shirtBitsImageArray){
					if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
						if(shirtBitsImageArray[shirtBit].search('left') != -1){
							//$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/c9_view1_cuffs_left_1buttonangle_cuffs.gif');
							$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
						} 
						if(shirtBitsImageArray[shirtBit].search('right') != -1){
							//$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/c9_view1_cuffs_right_cuffs.gif');
							$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
						}
					}
				}
			break;
			case 'leftCuffs':
				for(var shirtBit in shirtBitsImageArray){
					if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
						if(shirtBitsImageArray[shirtBit].search('left') != -1){
							$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/'+indexValue+'view1_cuffs_left_1buttonangle_cuffs.gif');
							//$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/c9_view1_cuffs_left_1buttonangle_innercuffs.gif');
						} 
					}
				}
			break;
			case 'rightCuffs':
				for(var shirtBit in shirtBitsImageArray){
					if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
						if(shirtBitsImageArray[shirtBit].search('right') != -1){
							$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/'+indexValue+'view1_cuffs_right_cuffs.gif');
							//$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/c9_view1_cuffs_right_innercuffs.gif');
						}
					}
				}
			break;
			case 'leftInnerCuffs':
				for(var shirtBit in shirtBitsImageArray){
					if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
						if(shirtBitsImageArray[shirtBit].search('left') != -1){
							//$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/c9_view1_cuffs_left_1buttonangle_cuffs.gif');
							$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
						} 
					}
				}
			break;
			case 'rightInnerCuffs':
				for(var shirtBit in shirtBitsImageArray){
					if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
						if(shirtBitsImageArray[shirtBit].search('right') != -1){
							//$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/c9_view1_cuffs_right_cuffs.gif');
							$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
						}
					}
				}
			break;
			case 'all':
				for(var shirtBit in shirtBitsImageArray){
						if(shirtBitsImageArray[shirtBit].search('base') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							$('.base').attr('src',shirtBitsImageArray[shirtBit]);
							$('.longsleeves').attr('src','//www.shirtsmyway.com/graphics/view1/sleeves/long/'+indexValue+'view1_sleeves_long.gif');
							$('.innerback').attr('src','//www.shirtsmyway.com/graphics/view1/innerback/'+indexValue+'view1_innerback.gif');

						}
						if(shirtBitsImageArray[shirtBit].search('collar') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('/classic/collar/') != -1){
								console.log(shirtBitsImageArray[shirtBit]);
								$('.collar').attr('src',shirtBitsImageArray[shirtBit]);
							}
							if(shirtBitsImageArray[shirtBit].search('/classic/innercollar/') != -1){
								$('.innercollar').attr('src','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/'+indexValue+'view1_collar_classic_innercollar.gif');
							}
						}
						if(shirtBitsImageArray[shirtBit].search('placket') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							$('.placket').attr('src',shirtBitsImageArray[shirtBit]);
							//$('.innercollar').attr('src','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/c9_view1_collar_classic_innercollar.gif');
						}
						if(shirtBitsImageArray[shirtBit].search('pocket') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							$('.pocket').attr('src',shirtBitsImageArray[shirtBit]);
							//$('.innercollar').attr('src','//www.shirtsmyway.com/graphics/view1/collar/classic/innercollar/c9_view1_collar_classic_innercollar.gif');
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/'+indexValue+'view1_cuffs_left_1buttonangle_cuffs.gif');
								$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/'+indexValue+'view1_cuffs_right_cuffs.gif');
								$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
							}
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/'+indexValue+'view1_cuffs_left_1buttonangle_cuffs.gif');
								$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/'+indexValue+'view1_cuffs_right_cuffs.gif');
								$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
							}
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								//$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/c9_view1_cuffs_left_1buttonangle_cuffs.gif');
								$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								//$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/c9_view1_cuffs_right_cuffs.gif');
								$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
							}
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/'+indexValue+'view1_cuffs_left_1buttonangle_cuffs.gif');
								//$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/c9_view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/'+indexValue+'view1_cuffs_right_cuffs.gif');
								//$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/c9_view1_cuffs_right_innercuffs.gif');
							}
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('left') != -1){
								//$('.leftCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/cuffs/c9_view1_cuffs_left_1buttonangle_cuffs.gif');
								$('.leftInnnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/left/1buttonangle/innercuffs/'+indexValue+'view1_cuffs_left_1buttonangle_innercuffs.gif');
							} 
						}
						if(shirtBitsImageArray[shirtBit].search('cuffs') != -1 && shirtBitsImageArray[shirtBit].search(referenceValue) != -1){
							if(shirtBitsImageArray[shirtBit].search('right') != -1){
								//$('.rightCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/cuffs/c9_view1_cuffs_right_cuffs.gif');
								$('.rightInnerCuffs').attr('src','//www.shirtsmyway.com/graphics/view1/cuffs/right/innercuffs/'+indexValue+'view1_cuffs_right_innercuffs.gif');
							}
						}
					}
				break;
		};
	})

	// var $panelContents  = $('.panel-content .contenttobeshown');
	// var isVisible = $panelContents.hasClass('fabric-panel');
	// var isDisplay = $panelContents.css('display');
	// if(isVisible == true && isDisplay == 'none'){
	// 	$panelContents.css('display','block');
	// }

	// $('.base.all').click(function(e){
	// 	e.preventDefault();
	// 	var $panelContents  = $('.panel-content');
	// 	$($panelContents+' .title-area').html('Base');
	// 	var isVisible = $panelContents.hasClass('fabric-panel');
	// 	var isDisplay = $panelContents.css('display');
	// 	if(isVisible == true && isDisplay == 'none'){
	// 		$panelContents.css('display','block');
	// 	}
	// });
	$('.base').click(function(e){
		e.preventDefault();
		$(this).addClass('act');
		var $panelContents  = $('.panel-content');
		var $subsection = $('.subsection');
		$('.panel-content .title-area').html('Pick Your Base');
		$('.panel-content .hiddenTextBox').val('base');
		$('.submenufabric').html('Base Fabric');
		$('.submenuStyle').html('Base Style');
		$subsection.show();
		// var isDisplay = $panelContents.css('display');
		// if(isVisible == true && isDisplay == 'none'){
		// 	$panelContents.css('display','block');
		// }
	});
	$('.baseall').click(function(e){
		e.preventDefault();
		$(this).addClass('act');
		var $panelContents  = $('.panel-content');
		var $subsection = $('.subsection');
		$('.panel-content .title-area').html('Pick Your Fabric');
		$('.panel-content .hiddenTextBox').val('all');
		//$('.submenufabric').html('Base Fabric');
		//$('.submenuStyle').html('Base Style');
		$subsection.hide();
		// var isDisplay = $panelContents.css('display');
		// if(isVisible == true && isDisplay == 'none'){
		// 	$panelContents.css('display','block');
		// }
	});
	$('.placket').click(function(e){
		e.preventDefault();
		$(this).addClass('act');
		var $panelContents  = $('.panel-content');
		var $subsection = $('.subsection');
		$('.panel-content .title-area').html('Pick Your Placket');
		$('.panel-content .hiddenTextBox').val('placket');
		//$('.submenufabric').html('Base Fabric');
		//$('.submenuStyle').html('Base Style');
		$subsection.hide();
		// var isDisplay = $panelContents.css('display');
		// if(isVisible == true && isDisplay == 'none'){
		// 	$panelContents.css('display','block');
		// }
	});
	$('.pocket').click(function(e){
		e.preventDefault();
		$(this).addClass('act');
		var $panelContents  = $('.panel-content');
		var $subsection = $('.subsection');
		$('.panel-content .title-area').html('Pick Your Pocket');
		$('.panel-content .hiddenTextBox').val('pocket');
		$('.submenufabric').html('Pocket Fabric');
		$('.submenuStyle').html('Pocket Style');
		$subsection.show();
		// var isDisplay = $panelContents.css('display');
		// if(isVisible == true && isDisplay == 'none'){
		// 	$panelContents.css('display','block');
		// }
	});
	$('.collar').click(function(e){
		e.preventDefault();
		$(this).addClass('act');
		var $panelContents  = $('.panel-content');
		var $subsection = $('.subsection');
		$('.panel-content .title-area').html('Pick Your Collar');
		$('.panel-content .hiddenTextBox').val('collar');
		$('.submenufabric').html('Collar Fabric');
		$('.submenuStyle').html('Coolar Style');
		$subsection.show();
		// var isDisplay = $panelContents.css('display');
		// if(isVisible == true && isDisplay == 'none'){
		// 	$panelContents.css('display','block');
		// }
	});
	$('.cuffs').click(function(e){
		e.preventDefault();
		$(this).addClass('act');
		var $panelContents  = $('.panel-content');
		var $subsection = $('.subsection');
		$('.panel-content .title-area').html('Pick Your Cuffs');
		$('.panel-content .hiddenTextBox').val('cuffs');
		//$('.submenufabric').html('Collar Fabric');
		//$('.submenuStyle').html('Coolar Style');
		$subsection.hide();
		// var isDisplay = $panelContents.css('display');
		// if(isVisible == true && isDisplay == 'none'){
		// 	$panelContents.css('display','block');
		// }
	});
	$('.inner-cuffs').click(function(e){
		e.preventDefault();
		$(this).addClass('act');
		var $panelContents  = $('.panel-content');
		var $subsection = $('.subsection');
		$('.panel-content .title-area').html('Pick Inner Cuffs');
		$('.panel-content .hiddenTextBox').val('innerCuffs');
		//$('.submenufabric').html('Collar Fabric');
		//$('.submenuStyle').html('Coolar Style');
		$subsection.hide();
		// var isDisplay = $panelContents.css('display');
		// if(isVisible == true && isDisplay == 'none'){
		// 	$panelContents.css('display','block');
		// }
	});
	
});