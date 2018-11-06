  it('test2', () => {
    const wizardFocus = [
      { x: 0, y: 0, width: 10, height: 10 },
    ]
    expect(test2(wizardFocus)).toEqual({
      x: -10, y: -10, width: 30, height: 30,
    });
  });

  it('test2', () => {
    const wizardFocus = [
      { x: 0, y: 0, width: 10, height: 10 },
      { x: 100, y: 100, width: 10, height: 10 },
    ]
    expect(test2(wizardFocus)).toEqual({
      x: -10, y: -10, width: 130, height: 130,
    });
  });

  it('test2', () => {
    const wizardFocus = [
      { x: 210, y: 301, width: 225, height: 270 },
      { x: 484, y: 75, width: 300, height: 287 },
      { x: 179, y: 759, width: 445, height: 653 },
      { x: 872, y: 57, width: 680, height: 601 },
      { x: 122, y: 199, width: 236, height: 10 },
      { x: 391, y: 507, width: 680, height: 358 },
      { x: 610, y: 963, width: 783, height: 634 },
      { x: 748, y: 375, width: 438, height: 130 },
      { x: 578, y: 116, width: 508, height: 492 },
      { x: 556, y: 292, width: 368, height: 918 },
      { x: 759, y: 298, width: 763, height: 803 },
      { x: 9, y: 284, width: 541, height: 525 },
      { x: 164, y: 600, width: 903, height: 43 },
      { x: 756, y: 916, width: 106, height: 161 },
      { x: 309, y: 443, width: 907, height: 219 },
      { x: 414, y: 55, width: 916, height: 294 },
      { x: 796, y: 932, width: 273, height: 313 },
      { x: 134, y: 67, width: 787, height: 264 },
      { x: 456, y: 676, width: 926, height: 803 },
      { x: 203, y: 533, width: 858, height: 90 },
      { x: 716, y: 661, width: 837, height: 255 },
      { x: 447, y: 982, width: 166, height: 434 },
      { x: 107, y: 762, width: 619, height: 332 },
      { x: 193, y: 825, width: 213, height: 622 },
      { x: 923, y: 242, width: 313, height: 838 },
      { x: 4, y: 252, width: 324, height: 408 },
      { x: 665, y: 341, width: 689, height: 129 },
      { x: 486, y: 328, width: 941, height: 343 },
      { x: 822, y: 0, width: 635, height: 646 },
      { x: 215, y: 250, width: 542, height: 847 },
      { x: 274, y: 544, width: 274, height: 741 },
      { x: 668, y: 728, width: 931, height: 754 },
      { x: 514, y: 277, width: 651, height: 688 },
      { x: 894, y: 434, width: 294, height: 574 },
      { x: 445, y: 316, width: 224, height: 460 },
      { x: 588, y: 494, width: 74, height: 838 },
      { x: 5, y: 583, width: 287, height: 145 },
      { x: 877, y: 501, width: 734, height: 391 },
      { x: 796, y: 968, width: 614, height: 618 },
      { x: 38, y: 553, width: 893, height: 325 },
      { x: 839, y: 797, width: 210, height: 983 },
      { x: 739, y: 464, width: 109, height: 599 },
      { x: 353, y: 620, width: 93, height: 333 },
      { x: 350, y: 367, width: 898, height: 615 },
      { x: 970, y: 980, width: 219, height: 679 },
      { x: 699, y: 436, width: 281, height: 235 },
      { x: 923, y: 17, width: 20, height: 910 },
      { x: 263, y: 403, width: 186, height: 219 },
      { x: 575, y: 607, width: 746, height: 571 },
      { x: 627, y: 565, width: 248, height: 338 },
    ]
    expect(test2(wizardFocus)).toEqual({
      x: -6, y: -10, width: 1627, height: 1800,
    });
  });
