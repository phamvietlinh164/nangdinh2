export const major_op = [
    // ["An ninh", "an"],
    ["Không lưu - miền Bắc", "klmb"],
    ["Không lưu - miền Trung", "klmt"],
    ["Không lưu - miền Nam", "klmn"],
    ["FDO - HF - Thông báo hiệp đồng bay", "tbhd"],
    ["Kĩ thuật - CNS", "kt"],
    ["ARO AIS", "aa"],
    ["Signalman", "sgm"],
    ["Khí tượng", "kht"],
    ["Sơ đồ, bản đồ, dữ liệu hàng không", "dl"],
    ["Phương thức bay - Pans-ops", "po"]

]




export const unit_op = {
    "klmb": [
        ["Hà Nội ACC Radar", "HAN-ACC-RADAR"],
        ["Hà Nội ACC Non Radar", "HAN-ACC-NON-RADAR"],
        ["Kíp trưởng Hà Nội ACC", "KT-ACC-HAN"],
        ["Nội Bài APP Radar", "NBA-APP-RADAR"],
        ["Nội Bài APP Non Radar", "NBA-APP-NON-RADAR"],
        ["Kíp trưởng Nội Bài APP TWR", "KT-NB-APP-TWR"],
        ["Nội Bài Tower", "TWR-NBA"],
        ["Điện Biên Tower", "TWR-DB"],
        ["Cát Bi Tower", "TWR-CB"],
        ["Thọ Xuân Tower", "TWR-TX"],
        ["Vinh Tower", "TWR-V"],
        ["Đồng Hới Tower", "TWR-DH"],
        ["Nội Bài Ground", "GCU-NBA"],
    ],
    "klmt": [
        ["Đà Nẵng APP Radar", "DAN-APP-RADAR"],
        ["Đà Nẵng APP Non Radar", "DAN-APP-NON-RADAR"],
        ["Kíp trưởng Đà Nẵng APP TWR", "KT-DAN-APP-TWR"],
        ["Đà Nẵng TWR", "TWR-DAN"],
        ["Phú Bài TWR", "TWR-PBA"],
        ["Chu Lai TWR", "TWR-CLA"],
        ["Playku TWR", "TWR-PLK"],
        ["Phù Cát TWR", "TWR-PCA"],
        ["Đà Nẵng GCU", "GCU-DAN"],
        ["Tuy Hòa Tower", "TWR-TH"],
        ["Cam Ranh Tower", "TWR-CR"],
        ["Kíp trưởng Cam Ranh APP", "KT-CR-APP"],
    ],
    "klmn": [
        ["Hồ Chí Minh ACC Radar", "HCM-ACC-RADAR"],
        ["Hồ Chí Minh ACC Non Radar", "HCM-ACC-NON-RADAR"],
        ["Kíp trưởng Hồ Chí Minh ACC", "KT-ACC-HCM"],
        ["Tân Sơn Nhất APP Radar", "TSN-APP-RADAR"],
        ["Tân Sơn Nhất APP Non Radar", "TSN-APP-NON-RADAR"],
        ["Kíp trưởng Tân Sơn Nhất APP TWR", "KT-TSN-APP-TWR"],
        ["Tân Sơn Nhất Tower", "TWR-TSN"],
        ["Buôn Ma Thuột Tower", "TWR-BMT"],
        ["Liên Khương Tower", "TWR-LK"],
        ["Rạch Giá Tower", "TWR-RG"],
        ["Cà Mau Tower", "TWR-CM"],
        ["Cần Thơ Tower", "TWR-CT"],
        ["Côn Sơn Tower", "TWR-CS"],
        ["Phú Quốc Tower", "TWR-PQ"],
        ["Tân Sơn Nhất Ground", "GCU-TSN"]
    ],
    "tbhd": [
        ["FDO ACC Hà Nội - Lý thuyết chung", "FDO_ACC_HAN_LTC"],
        ["FDO ACC Hồ Chí Minh - Lý thuyết cơ sở", "FDO_ACC_HCM_LTCS"],
        ["HF ACC Hồ Chí Minh - Lý thuyết chung", "HF_ACC_HCM_LTC"],
        ["HF ACC Hồ Chí Minh - Lý thuyết cơ sở", "HF_ACC_HCM_LTCS"],
        ["Kíp trưởng TBHĐB - Tiếng Anh", "KT_TBHDB_ENGLISH"],
        ["Kíp trưởng TBHĐB - Tiếng Việt", "KT_TBHDB_TIENG_VIET"],
        ["Kíp trưởng TBHĐB - QLLKL", "KT_TBHDB_QLLKL"],
        ["Kíp viên TBHĐB - Lý thuyết chung", "KV_TBHDB_LTC"],
        ["Kíp viên TBHĐB - miền Bắc", "KV_TBHDB_MB"],
        ["Kíp viên TBHĐB - miền Trung", "KV_TBHDB_MT"],
        ["Kíp viên TBHĐB - miền Nam", "KV_TBHDB_MN"],
        ["Nhân viên TBHĐB - QLLKL", "NV_TBHDB_QLLKL"]
    ],
    "kt": [
        ["Ghi âm", "GA"],
        ["VHF", "VHF"],
        ["ADS_B", "ADS_B"],
        ["AMHS", "AMHS"],
        ["Bay hiệu chỉnh", "BHC"],
        ["Lý thuyết chung ghi âm - AMHS", "LTCGAAMHS"],
        ["NDB_QLB", "NDB"],
        ["Radar", "RADAR"],
        ["RDP_FDP", "RDP_FDP"],
        ["VVCS", "VVCS"],
        ["VOR_DME", "VOR_DME"],
    ],
    "kht": [
        ["Quan trắc viên", "QT"],
        // ["Dự báo", "DB"],
    ],
    "aa": [
        ["AIS sân bay quốc nội", "AIS_QN"],
        ["AIS sân bay quốc tế - Kíp viên", "AIS_QN_KV"],
        ["AIS sân bay quốc tế - Kíp trưởng", "AIS_QN_KT"],
        ["AIP", "AIP"],
        ["NOTAM - Kíp viên", "NT_KV"],
        ["NOTAM - Kíp trưởng", "NT_KT"],
        ["ARO - Kíp trưởng", "ARO_KT"],
        ["ARO - Kíp viên", "ARO_KV"],
    ],
    "dl": [
        ["Dữ liệu hàng không", "DL"],
        ["Sơ đồ, bản đồ hàng không", "SDBD"],
    ],
    "sgm": [["Signalman", "SIG"]],
    "po": [
        ["Lý thuyết chung", "PO_LTC"],
        ["Lý thuyết cơ sở", "PO_LTCS"]
    ]

}



export const ques_op = {
    "kl": [["Lý thuyết chung", "ltc"], ["Lý thuyết cơ sở", "ltcs"]],
    "ADS_B": [["Lý thuyết chung", "ADS_B_LTC"], ["Lý thuyết cơ sở", "ADS_B_LTCS"]],
    "AMHS": [["AMHS", "AMHS"]],
    "BHC": [["Bay hiệu chỉnh", "BAY_HC"],],
    "GA": [
        ["Ghi âm ACC HCM", "GA_ACC_HCM"],
        ["Ghi âm địa phương miền Bắc", "GA_DP_MB"],
        ["Ghi âm địa phương miền Nam", "GA_DP_MN"],
        ["Ghi âm địa phương miền Trung", "GA_DP_MT"],
        ["Ricochet ATCC - HAN", "GA_RICO_ATCC_HAN"],
        ["Ricochet TWR Nội Bài", "GA_RICO_TWR_NB"],
        ["Ghi âm TTKSLKL", "GA_TTKSLKL"],
        ["Ghi âm TWR TSN", "GA_TWR_TSN"],
        ["Xử lý sự cố TWR MN", "GA_XLSC_TWR_MN"],
        ["Câu hỏi hỏng hóc chung", "GA_CH"],
    ],
    "LTCGAAMHS": [["Lý thuyết chung ghi âm - AMHS", "LTC_GA_AMHS"]],
    "NDB": [["Lý thuyết chung", "NDB_QLB_LTC"], ["Lý thuyết cơ sở", "NDB_QLB_LTCS"]],
    "VHF": [
        ["VHF 3 miền", "VHF_3_MIEN"],
        ["HF miền Nam", "VHF_CH_HF_MN"],
        ["VHF Jotron miền Nam và miền Trung", "VHF_JOTRON_TA7650_MN_MT"],
        ["VHF RS SU250A EU230 miền Nam", "VHF_RS_SU250A_EU230_MN"],
    ],
    "RADAR": [
        ["RSM970S", "RADAR_RSM970S"],
        ["RSM970S miền Nam", "RADAR_RSM970S_MN"],
        ["STAR2000", "RADAR_STAR2000"],
        ["STAR2000 miền Nam", "RADAR_STAR2000_MN"],
        ["TRAC2000", "RADAR_TRAC2000"],
        ["TRAC2000 RS970 miền Trung", "RADAR_TRAC2000_RS970_MT"],
    ],
    "RDP_FDP": [
        ["A-SMGCS TWR Tân Sơn Nhất", "RDP_FDP_A_SMGCS_TSN"],
        ["ATM Eurocat X", "RDP_FDP_ATM_EUROCAT_X"],
        ["ATM miền Bắc", "RDP_FDP_ATM_MB"],
        ["ATM miền Nam", "RDP_FDP_ATM_MN"],
        ["Lý thuyết chung RDP_FDP", "RDP_FDP_LTC_RDP_FDP"],
        ["RDP Đà Nẵng", "RDP_FDP_RDP_DAN"],
        ["Xử lí sự cố ATM", "XLSC_ATM"]
    ],
    "VVCS": [
        ["VCCS 3020X AACC HCM", "VCCS_3020X_AACC_HCM"],
        ["RSM970S miền Nam", "VCCS_FREQUENTIS_ATCC_HN"],
        ["GAREX Đà Nẵng", "VCCS_GAREX_DN"],
        ["GAREX TWR Nội Bài", "VCCS_GAREX_TWR_NB"],
        ["LIBERTY STAR 3 TWR Tân Sơn Nhất", "VCCS_LIBERTY_STAR_3_TWR_TSN"],
        ["Lý thuyết chung", "VCCS_LTC"],
    ],
    "VOR_DME": [["VOR_DME", "VOR_DME"]],




    "AIS_QN": [["AIS sân bay quốc nội", "AIS-AD-AIS-QN-LTCS"]],
    "AIS_QN_KV": [["AIS sân bay quốc tế - Kíp viên", "AIS-AD-AIS-KVQT-LTC"]],
    "AIS_QN_KT": [["AIS sân bay quốc tế - Kíp trưởng", "AIS-AD-AIS-KTQT-LTC"]],
    "AIP": [["AIP", "AIS-AIP-LTC"]],
    "NT_KV": [["NOTAM - Kíp viên", "AIS-NOTAMKV-LTC"]],
    "NT_KT": [["NOTAM - Kíp trưởng", "AIS-NOTAMKT-LTC"]],
    "ARO_KT": [["ARO - Kíp trưởng", "AIS-ARO-KT-LTC"]],
    "ARO_KV": [["ARO - Kíp viên", "AIS-ARO-KV-LTC"]],



    "DL": [["Lý thuyết chung", "AIS-CSDL-LTC"], ["Lý thuyết cơ sở", "AIS-CSDL-LTCS"]],
    "SDBD": [["Lý thuyết chung", "AIS-SDBD-LTC"], ["Lý thuyết cơ sở", "AIS-SDBD-LTCS"]],




    "FDO_ACC_HAN_LTC": [["FDO ACC Hà Nội - Lý thuyết chung", "FDO_ACC_HAN_LTC"]],
    "FDO_ACC_HCM_LTCS": [["FDO ACC Hồ Chí Minh - Lý thuyết cơ sở", "FDO_ACC_HCM_LTCS"]],
    "HF_ACC_HCM_LTC": [["HF ACC Hồ Chí Minh - Lý thuyết chung", "HF_ACC_HCM_LTC"]],
    "HF_ACC_HCM_LTCS": [["HF ACC Hồ Chí Minh - Lý thuyết cơ sở", "HF_ACC_HCM_LTCS"]],
    "KT_TBHDB_ENGLISH": [["Kíp trưởng TBHĐB - Tiếng Anh", "KT_TBHDB_ENGLISH"]],
    "KT_TBHDB_TIENG_VIET": [["Kíp trưởng TBHĐB - Tiếng Việt", "KT_TBHDB_TIENG_VIET"]],
    "KT_TBHDB_QLLKL": [["Kíp trưởng TBHĐB - QLLKL", "KT_TBHDB_QLLKL"]],
    "KV_TBHDB_LTC": [["Kíp viên TBHĐB - Lý thuyết chung", "KV_TBHDB_LTC"]],
    "KV_TBHDB_MB": [["Kíp viên TBHĐB - miền Bắc", "KV_TBHDB_MB"]],
    "KV_TBHDB_MT": [["Kíp viên TBHĐB - miền Trung", "KV_TBHDB_MT"]],
    "KV_TBHDB_MN": [["Kíp viên TBHĐB - miền Nam", "KV_TBHDB_MN"]],
    "NV_TBHDB_QLLKL": [["Nhân viên TBHĐB - QLLKL", "NV_TBHDB_QLLKL"]],


    "SIG": [["Signalman", "SIG"]],

    "PO_LTC": [["Lý thuyết chung", "AIS-PTB-LTC"]],
    "PO_LTCS": [["Lý thuyết cơ sở", "AIS-PTB-LTCS"]],

    "QT": [["Quan trắc viên", "QTV"]]

}

