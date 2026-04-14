const quizData = [
  {
    "id": "L4010001",
    "question": "在 OSI 模型中，下列哪一層負責路由（Routing），尋找到達目的地的路徑？",
    "options": [
      "傳輸層（Transport Layer）",
      "網路層（Network Layer）",
      "資料鏈結層（Data Link Layer）",
      "實體層（Physical Layer）"
    ],
    "answer": "B",
    "analysis": "OSI 模型第三層網路層負責定址、路由。"
  },
  {
    "id": "L4010002",
    "question": "在 OSI 模型中，下列哪一層負責加解密？",
    "options": [
      "表現層（Presentation Layer）",
      "網路層（Network Layer）",
      "應用層（Application Layer）",
      "傳輸層（Transport Layer）"
    ],
    "answer": "A",
    "analysis": "OSI 模型第六層表現層負責編碼與轉碼、壓縮與解壓縮、加密與解密。"
  },
  {
    "id": "L4010003",
    "question": "我們常用的瀏覽器，例如 Firefox，是屬於 OSI 模型中的哪一層？",
    "options": [
      "表現層（Presentation Layer）",
      "網路層（Network Layer）",
      "應用層（Application Layer）",
      "會議層（Session Layer）"
    ],
    "answer": "C",
    "analysis": "OSI 第七層應用層為使用者與電腦溝通的階層，當使用者使用瀏覽器瀏覽網頁時，我們將其視為應用層的表現。"
  },
  {
    "id": "L4010004",
    "question": "在某區域網路中所有電腦都連接到一台交換器（switch），這是下列哪一種網路結構？",
    "options": [
      "環狀拓樸（Ring Topology）",
      "星狀拓樸（Star Topology）",
      "匯流排拓樸（Bus Topology）",
      "混合式拓樸（Hybrid Topology）"
    ],
    "answer": "B",
    "analysis": "星狀拓樸所有電腦及網路設備皆會連接到一個共同的設備。"
  },
  {
    "id": "L4010005",
    "question": "FDDI 是藉由光的傳遞，不能讓進出的光彼此干擾，採用下列哪一種網路結構？",
    "options": [
      "環狀拓樸（Ring Topology）",
      "星狀拓樸（Star Topology）",
      "匯流排拓樸（Bus Topology）",
      "混合式拓樸（Hybrid Topology）"
    ],
    "answer": "A",
    "analysis": "FDDI 採用雙環結構，具有容錯能力。"
  },
  {
    "id": "L4010006",
    "question": "下列哪一個 IP 是屬於 Class C 範圍的 IP？",
    "options": [
      "168.117.10.68",
      "230.95.1.11",
      "192.168.122.1",
      "127.0.0.1"
    ],
    "answer": "C",
    "analysis": "Class C 的 IP 範圍 192.0.1.0 至 223.255.255.255。"
  },
  {
    "id": "L4010007",
    "question": "下列哪些為 Private IP Address？(複選題)",
    "options": [
      "172.27.10.68",
      "230.95.1.11",
      "192.168.122.1",
      "10.255.0.1"
    ],
    "answer": "ACD",
    "analysis": "Class A 保留範圍為 10.0.0.0-10.255.255.255。Class B 為 172.16.0.0-172.31.255.255。Class C 為 192.168.0.0-192.168.255.255。"
  },
  {
    "id": "L4010008",
    "question": "網路區段 192.168.1.0/26 有多少個主機 IP（含第一個網路 IP 及最後一個廣播 IP）可用？",
    "options": [
      "26",
      "64",
      "128",
      "256"
    ],
    "answer": "B",
    "analysis": "32-26=6，2 的 6 次方，共有 64 個 IP。"
  },
  {
    "id": "L4010009",
    "question": "在一個 Class B 網路中切出每個子網路有 1024 個主機 IP（含第一個網路 IP 及最後一個廣播 IP），則子網路遮罩的位元數下列哪一項正確？",
    "options": [
      "20",
      "21",
      "22",
      "24"
    ],
    "answer": "C",
    "analysis": "2 的 10 次方為 1024，32-10=22。"
  },
  {
    "id": "L4010010",
    "question": "Class C 網路中有一個子網路及遮罩為 192.168.10.0/28，下列哪些 IP 不能設為此子網路的 gateway？",
    "options": [
      "192.168.10.1",
      "192.168.10.16",
      "192.168.10.32",
      "192.168.10.64"
    ],
    "answer": "BCD",
    "analysis": "32-28=4，2 的 4 次方為 16，該子網路 IP 範圍從 192.168.10.0 至 192.168.10.15，因此 BCD 均不在範圍內無法使用。"
  },
  {
    "id": "L4010011",
    "question": "下列哪一項協定是 TCP/IP 中用來將 IP 位址解析成 MAC 位址？",
    "options": [
      "ARP",
      "UDP",
      "TCP",
      "ICMP"
    ],
    "answer": "A",
    "analysis": "ARP 是將 IP 位址轉換成 MAC 實體位址的協定。"
  },
  {
    "id": "L4010012",
    "question": "在檢查目的主機是否存活時，經常使用 ping 指令，請問下列哪一項協定完成此請求及回應？",
    "options": [
      "ARP",
      "UDP",
      "TCP",
      "ICMP"
    ],
    "answer": "D",
    "analysis": "ICMP 協定負責查詢及錯誤回報（如 Echo Request/Reply）。"
  },
  {
    "id": "L4010013",
    "question": "關於 UDP 及 TCP 的敘述，下列哪一項錯誤？",
    "options": [
      "UDP傳輸效率高於TCP",
      "UDP可靠性低於TCP",
      "UDP/TCP封包都有來源埠號及目的埠號",
      "UDP/TCP傳送資料前都會經過連線交握（handshaking）的動作"
    ],
    "answer": "D",
    "analysis": "UDP不會有連線交握的情況，但TCP為了確保對方能夠正確收到封包，會進行連線交握。"
  },
  {
    "id": "L4010014",
    "question": "關於 PPP 協定的敘述，下列哪些正確？(複選題)",
    "options": [
      "PPPoE讓ISP可以利用PPP的認證功能進行顧客管理",
      "PPP沒有雙方建立協商機制",
      "PPP使用PAP及CHAP兩種認證方式",
      "PPP只支援TCP/IP協定"
    ],
    "answer": "AC",
    "analysis": "PPP允許雙方進行協商，以確定不同的選項，PPP可以與各種不同的網路協定互相整合。"
  },
  {
    "id": "L4010015",
    "question": "下列哪一個 IPv6 位址寫法錯誤？",
    "options": [
      "::1",
      "fe80::c279:4389:3114:c6e7",
      "e0d3::ff12::5e",
      "9e36:903c::6698"
    ],
    "answer": "C",
    "analysis": "IPv6 簡化寫法中，雙冒號「::」在一個位址內只能出現一次。"
  },
  {
    "id": "L4010016",
    "question": "IPv6的全域位址如同IPv4的Public IP，關於IPv6全域位址的敘述下列哪一項正確？",
    "options": [
      "前四個位元固定為0011",
      "前四個位元固定為1100",
      "前三個位元固定為001",
      "前三個位元固定為100"
    ],
    "answer": "C",
    "analysis": "IPv6全域位址前三個位元固定為001。"
  },
  {
    "id": "L4010017",
    "question": "下列哪一項是屬於封閉迴路，自我測試使用的IP位址？",
    "options": [
      "127.0.0.1",
      "192.168.0.0",
      "10.10.0.1",
      "172.16.0.255"
    ],
    "answer": "A",
    "analysis": "127.0.0.1是lookback address，代表本機位址，用於對本機的網路進行測試。"
  },
  {
    "id": "L4010018",
    "question": "一部主機IP為10.10.0.71，遮罩255.255.255.128，請問下列哪一項是該電腦網路的Network IP？",
    "options": [
      "10.10.0.0",
      "10.10.1.0",
      "10.10.0.255",
      "10.10.0.128"
    ],
    "answer": "A",
    "analysis": "Network IP為IP與遮罩的二進位做AND運算的結果。"
  },
  {
    "id": "L4010019",
    "question": "一部主機IP為192.168.111.201，遮罩255.255.0.0，請問下列哪一項是該電腦網路的Network IP？",
    "options": [
      "192.168.111.0",
      "192.168.111.255",
      "192.168.0.0",
      "192.168.0.255"
    ],
    "answer": "C",
    "analysis": "Network IP為IP與遮罩的二進位做AND運算的結果。"
  },
  {
    "id": "L4010020",
    "question": "下列哪一種接頭是應用於1000Base-T（Gigabit Ethernet）網路？",
    "options": [
      "BNC",
      "RJ-45",
      "終端電阻",
      "T型接頭"
    ],
    "answer": "B",
    "analysis": "Gigabit Ethernet（1000Base-T）使用八個腳位的RJ45連接頭。"
  },
  {
    "id": "L4010021",
    "question": "請問下列哪些指令可以得知目前Ubuntu主機所有可用的網路介面卡名稱？",
    "options": [
      "ip link",
      "ip interface name",
      "ip show interface",
      "ip address"
    ],
    "answer": "AD",
    "analysis": "ip的參數link、address（可縮寫為addr）都可以顯示出目前的網路介面卡名稱。"
  },
  {
    "id": "L4010022",
    "question": "Ubuntu有一個內建工具程式可以顯示與更改網卡的相關設定，例如：自動協商、連接埠速度、雙工模式和網路喚醒（Wake-on-LAN）等。請問是哪一個程式？",
    "options": [
      "ethtool",
      "netplan",
      "ip",
      "netstat"
    ],
    "answer": "A",
    "analysis": "ethtool用於顯示與更改網卡硬體層級的參數；netplan是組態管理工具；ip是動態設定工具。"
  },
  {
    "id": "L4010023",
    "question": "已知目前Ubuntu乙太網卡名稱為enp0s3，若要手動更改該網卡IP Address為10.10.100.200/24以進行連線測試，下列哪一個指令最為恰當？",
    "options": [
      "sudo ip address add 10.10.100.200/24 device enp0s3",
      "sudo ip address del 10.10.100.200/24 device enp0s3",
      "sudo ip address show 10.10.100.200/24 device enp0s3",
      "sudo ip address save 10.10.100.200/24 device enp0s3"
    ],
    "answer": "A",
    "analysis": "利用ip工具更改靜態IP的語法為：sudo ip address add <IP/遮罩> device <介面名稱>。"
  },
  {
    "id": "L4010024",
    "question": "如附圖所示，小明利用指令ip address show device enp0s3查詢網卡配置，請問下列敘述哪一項正確？",
    "image": "image/L4010024.PNG",
    "options": [
      "目前該網卡的IP Address是動態配置、並且已經啟用",
      "目前該網卡的IP Address是靜態配置、並且已經啟用",
      "目前該網卡的IP Address是動態配置、並且已經停用",
      "目前該網卡的IP Address是靜態配置、並且已經停用"
    ],
    "answer": "A",
    "analysis": "ip address show可查詢網卡狀態，包含啟用狀態(UP/DOWN)與獲取IP的方式。"
  },
  {
    "id": "L4010025",
    "question": "如附圖所示，小明準備設定自己新個人電腦的網路參數，他想要進一步知道實驗室對外的連線參數設定，特別是預設路由的IP Address。剛好學長告訴他一行非常重要的Ubuntu指令，利用該指令可以查出預設路由的設定值。附圖是該指令的輸出結果，下列敘述哪一項正確？",
    "image": "image/L4010025.PNG",
    "options": [
      "該網卡的預設路由為10.0.2.0",
      "該網卡的預設路由為10.0.2.2",
      "該網卡的預設路由為10.0.2.15",
      "該網卡的預設路由為10.0.2.254"
    ],
    "answer": "B",
    "analysis": "利用ip route show查詢路由設定，關鍵字「default via」後方的IP Address即為預設路由（預設閘道）。不一定都是 xxx.xxx.xxx.254"
  },
  {
    "id": "L4010026",
    "question": "若要「暫時性」修改Ubuntu機器的預設路由為10.0.2.254，已知網卡為enp0s3，且原路由已存在，應使用哪一個指令？",
    "options": [
      "sudo ip route add default via 10.0.2.15",
      "sudo ip route add default via 10.0.2.254",
      "sudo ip route change default via 10.0.2.15",
      "sudo ip route change default via 10.0.2.254"
    ],
    "answer": "D",
    "analysis": "若預設路由已存在，必須利用ip route change來更改，而非add。"
  },
  {
    "id": "L4010027",
    "question": "小明想要將Ubuntu主機的網卡「暫時停用」，已知網卡名稱為enp0s3，應利用下列哪一個指令？",
    "options": [
      "sudo ip link set enp0s3 down",
      "sudo ip link set enp0s3 up",
      "ip link set enp0s3 down",
      "ip link set enp0s3 up"
    ],
    "answer": "A",
    "analysis": "早期會使用ifdown/ifup指令來暫時停用或啟用網卡，目前則建議使用sudo ip link set device <網卡名稱> down/up的方式來設定。注意：此時一定要加上sudo。"
  },
  {
    "id": "L4010028",
    "question": "小白想用最簡單的指令來驗證網路連線是否正常，下列哪一個指令最有可能？",
    "options": [
      "ping 8.8.8.8",
      "connect 8.8.8.8",
      "check 8.8.8.8",
      "nslookup 8.8.8.8"
    ],
    "answer": "A",
    "analysis": "ping是網管最常用來檢驗網路連線狀態的工具程式。"
  },
  {
    "id": "L4010029",
    "question": "主機無法連到外面的雲端主機，想檢查主機到外網的封包交換與連線路徑是否正常，下列哪一個指令最有可能？",
    "options": [
      "ping 8.8.8.8",
      "check 8.8.8.8",
      "traceroute 8.8.8.8",
      "nslookup 8.8.8.8"
    ],
    "answer": "C",
    "analysis": "traceroute可用於檢查網路路由路徑問題。"
  },
  {
    "id": "L4010030",
    "question": "查看/etc/netplan/00-installer-config.yaml，內容包含「dhcp4: true」，下列敘述哪些正確？(複選題)",
    "image": "image/L4010030.PNG",
    "options": [
      "目前該主機的IP Address為靜態配置",
      "目前該主機的IP Address為動態配置",
      "該主機只有一張網卡，網卡名稱為enp0s3",
      "該主機只有一張網卡被設定了相關參數，但可能還有其他網卡"
    ],
    "answer": "BD",
    "analysis": "「network:」區段內可以定義多種型態的網路設定：ethernets、wifis、bonds、bridges、vlans等。附圖中ethernets/enp0s3內部有參數dhcp4: true即代表enp0s3網卡是動態配置IP Address。但是，該主機可能還有其他尚未設定的網卡，目前是無法從該檔案確認有多少網卡。"
  },
  {
    "id": "L4010031",
    "question": "如附圖所示，已知目前Ubuntu主機採取預設的netplan管理網路，查看/etc/netplan/01-demo01-config.yaml內容，下列敘述哪些正確？(複選題)",
    "image": "image/L4010031.PNG",
    "options": [
      "目前主機的網路底層renderer模組為networkd",
      "目前主機的網路底層renderer模組為NetworkManager",
      "主機設定了一張網卡（enp0s5），是屬於動態配置的IP Address",
      "網卡設定的IP Address為10.0.3.15，子網段遮罩為255.255.255.0"
    ],
    "answer": "AD",
    "analysis": "預設Server renderer底層是networkd、而Desktop則為NetworkManager。YAML檔中若寫addresses: [10.0.3.15/24] 即代表遮罩為255.255.255.0。"
  },
  {
    "id": "L4010032",
    "question": "查看/etc/netplan/02-demo02-config.yaml網卡組態檔，關於DNS Server與預設路由的設定，下列哪一項敘述錯誤？",
    "image": "image/L4010032.PNG",
    "options": [
      "目前主機的網路底層renderer模組為NetworkManager",
      "目前設定了兩組DNS Server：10.0.3.1以及8.8.8.8",
      "目前預設路由為10.0.3.15",
      "目前預設路由為10.0.3.254"
    ],
    "answer": "C",
    "analysis": "10.0.3.15 通常是主機本身的 IP 位址，而非預設路由 (via: 10.0.3.254)。"
  },
  {
    "id": "L4010033",
    "question": "小明需要將預設路由改為（10.0.3.254），在編輯YAML設定檔時，to: 與 via: 後方該填入哪些內容？(複選題)",
    "image": "image/L4010033.PNG",
    "options": [
      "to: 10.0.3.254, via: 10.0.3.15",
      "to: 10.0.3.15, via: 10.0.3.254",
      "to: default, via: 10.0.3.254",
      "to: 0.0.0.0/0, via: 10.0.3.254"
    ],
    "answer": "CD",
    "analysis": "設定預設路由時，to: 後方可以是 default 或 0.0.0.0/0；via: 則是閘道的 IP 位址。"
  },
  {
    "id": "L4010034",
    "question": "查看/etc/netplan/03-demo03-config.yaml，內容設定了兩組預設路由分別為 10.0.3.254 (metric: 100) 與 10.0.5.254 (metric: 200)，下列敘述何者正確？",
    "image": "image/L4010034.PNG",
    "options": [
      "封包將會輪流由這兩組閘道傳遞",
      "10.0.3.254 的 metric 為 100、優先權較高，是最後的預設路由",
      "10.0.5.254 的 metric 為 200、優先權較高，是最後的預設路由",
      "這是錯誤設定，套用時會產生錯誤訊息"
    ],
    "answer": "B",
    "analysis": "預設路由可以設定多組，系統會選擇 metric 數值較小者作為優先。"
  },
  {
    "id": "L4010035",
    "question": "修改 /etc/netplan 目錄內的 *.yaml 檔案後，應執行哪一個指令才能讓設定生效？",
    "options": [
      "sudo netplan active",
      "sudo netplan go",
      "sudo netplan try",
      "sudo netplan apply"
    ],
    "answer": "D",
    "analysis": "sudo netplan apply 會立即套用設定；netplan try 則可用於保險測試。"
  },
  {
    "id": "L4010036",
    "question": "小明發現 /etc/netplan 目錄下存在多個 YAML 檔案，下列敘述哪一項正確？",
    "image": "image/L4010036.PNG",
    "options": [
      "netplan 組態檔案只能定義一個，否則會出錯",
      "可以有多個組態檔案，netplan 會依照字母順序由小而大逐一套用",
      "只能套用第一個 YAML 檔案，其餘會被忽略",
      "只能套用最後一個 YAML 檔案，其餘會被忽略"
    ],
    "answer": "B",
    "analysis": "Netplan 會依序讀取所有 YAML，後面的設定若有衝突會覆蓋前面的設定。"
  },
  {
    "id": "L4010037",
    "question": "網管小王想要利用 ping 確認 IPv6 是否有正常設定與啟用，下列哪些指令可以達成目的？(複選題)",
    "options": [
      "ping ::1",
      "ping -6 ::1",
      "ping -4 ::1",
      "ping 127.0.0.1"
    ],
    "answer": "AB",
    "analysis": "::1 是 IPv6 的本機迴路位址，127.0.0.1 是 IPv4 版本。使用 -6 可強制指定 IPv6 測試。"
  },
  {
    "id": "L4010038",
    "question": "關於 SSH 的相關指令運用，下列敘述哪些正確？(複選題)",
    "options": [
      "指令 scp root@192.168.1.1:/path/file /tmp 可將遠端檔案拷貝到本機",
      "SFTP 具備類似 FTP 的功能，且傳輸過程會加密",
      "新版 SFTP 支援將整個目錄一次性上傳至遠端主機",
      "SFTP 不能用 root 權限登入遠端主機"
    ],
    "answer": "ABC",
    "analysis": "SFTP 是基於 SSH 的安全傳輸，具備高安全性，且只要權限允許（如配置允許 root 登入），可以用 root 執行。"
  },
  {
    "id": "L4010039",
    "question": "小明想要暫時停止 networkd 服務，以便測試 NetworkManager，請問應執行哪個指令？",
    "options": [
      "sudo systemctl stop systemd-networkd",
      "systemctl stop systemd-networkd.service",
      "sudo systemctl pause systemd-networkd",
      "systemctl pause systemd-networkd.service"
    ],
    "answer": "A",
    "analysis": "管理服務須加 sudo，停止服務的關鍵字是 stop。"
  },
  {
    "id": "L4010040",
    "question": "經過綿密的準備與測試之後，小明確定要以NetworkManager取代networkd作為網路控管的底層。除了原本內建的networkd底層服務之外，現在他已經安裝好了NetworkManager工具包。請問他要如何「完全地停止」networkd服務（即重開機之後systemd-networkd不會再被系統啟動）？",
    "image": "image/L4010040.PNG",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": "B",
    "analysis": "disable 參數可取消服務的開機啟動設定。"
  },
  {
    "id": "L4010041",
    "question": "下列哪一個是 Network Manager 內建，可利用「文字視窗模式」進行設定的工具？",
    "options": [
      "nmcli",
      "nmtui",
      "nmgui",
      "nmxui"
    ],
    "answer": "B",
    "analysis": "nmtui (Network Manager Text UI) 提供類似圖形介面的文字視窗選單。"
  },
  {
    "id": "L4010042",
    "question": "想要利用 nmcli 查看目前網路連線狀態，下列敘述哪些正確？(複選題)",
    "options": [
      "nmcli c",
      "nmcli d",
      "nmcli e",
      "nmcli f"
    ],
    "answer": "AB",
    "analysis": "NetworkManager文字模式下常用的指令為nmcli與nmtui。其中nmcli為單純的文字命令管理程式，後方跟著不同參數：c表示目前建立連線的連線、d表示device。"
  },
  {
    "id": "L4010043",
    "question": "下列哪一項是 SSH 替代 Telnet 的最主要原因？",
    "options": [
      "Telnet 傳輸所有資料都是明文，有安全疑慮",
      "Telnet 的使用者認證太慢",
      "SSH 通訊速度較快",
      "SSH 比較不會對伺服器造成額外負擔"
    ],
    "answer": "A",
    "analysis": "SSH 具備加密機制，可防止帳號密碼被中途截取。"
  },
  {
    "id": "L4010044",
    "question": "假設主機已安裝必要套件（含 net-tools），下列哪些指令可以列出路由表？(複選題)",
    "options": [
      "route",
      "netstat -n",
      "netstat -r",
      "ip route"
    ],
    "answer": "ACD",
    "analysis": "route 與 netstat -r 是早期指令，ip route 是現代建議指令。netstat -n 僅顯示數字位址，不顯示路由表。"
  },
  {
    "id": "L4010045",
    "question": "下列哪一項指令可以清除目前路由表的快取資訊？",
    "options": [
      "route --clean",
      "route --flush",
      "route --no-cache",
      "ip route flush cache"
    ],
    "answer": "D",
    "analysis": "ip route flush cache 是目前 Linux 中清除路由快取的正確語法。"
  },
  {
    "id": "L4010046",
    "question": "當用戶端設備發送請求，由伺服器自動分配 IP 位址與配置資訊回傳，使其能正確配置網路參數，這是哪一種網路服務？",
    "options": [
      "DNS",
      "SSH",
      "DHCP",
      "NS"
    ],
    "answer": "C",
    "analysis": "DHCP (Dynamic Host Configuration Protocol) 提供動態網路配置機制，讓用戶端無需手動設定即可上網。"
  },
  {
    "id": "L4010047",
    "question": "使用 SSH 從一台 Linux 主機登入另一台 Server，哪些選項可以在登入後切換為使用者 lisa？(複選題)",
    "options": [
      "ssh lisa@192.168.10.5",
      "ssh -l lisa 192.168.10.5",
      "ssh -u lisa 192.168.10.5",
      "ssh -p lisa 192.168.10.5"
    ],
    "answer": "AB",
    "analysis": "-l 代表 login name；-p 用於指定 port；ssh 指令並無 -u 參數。"
  },
  {
    "id": "L4010048",
    "question": "請問 TCP 22 埠號（Port Number）通常為下列哪一個 Daemon 所使用？",
    "options": [
      "Telnet Server",
      "FTP Server",
      "SSH Server",
      "SMTP Server"
    ],
    "answer": "C",
    "analysis": "SSH 預設使用 Port 22；可參考 /etc/services 檔案內容。"
  },
  {
    "id": "L4010049",
    "question": "Telnet 伺服器啟動後，通常會綁定下列哪一個號碼作為連接埠號？",
    "options": [
      "20",
      "21",
      "22",
      "23"
    ],
    "answer": "D",
    "analysis": "Telnet 預設綁定的 Port Number 為 23。"
  },
  {
    "id": "L4010050",
    "question": "下列哪一個檔案定義了 Linux 常用的 Port Number、連線方式 (tcp/udp) 與服務程式的對應關係？",
    "options": [
      "/etc/services",
      "/etc/xinetd.conf",
      "/etc/hosts",
      "/etc/hosts.allow"
    ],
    "answer": "A",
    "analysis": "/etc/services 是紀錄服務與連接埠對應關係的核心檔案。"
  },
  {
    "id": "L4010051",
    "question": "觀 check 題目：xinetd 控管的網路服務預設通常是關閉的，若要啟用某項服務，在 /etc/xinetd.d/ 下的參數檔案中哪一項設定是必要的？",
    "options": [
      "disable=no",
      "wait=no",
      "disable=yes",
      "wait=yes"
    ],
    "answer": "A",
    "analysis": "在 xinetd 設定中，disable=no 表示啟用該項服務。"
  },
  {
    "id": "L4010052",
    "question": "關於 Telnet 伺服器的敘述，下列哪些錯誤？(複選題)",
    "options": [
      "預設會限制 root 不能登入系統",
      "在預設狀況下，只要開啟服務，所有使用者都能登入",
      "在 /etc/nologin 檔案中可設定「不可登入」的使用者名單",
      "若設定 /etc/nologin 時已有使用者登入，使用者會立刻被強迫登出"
    ],
    "answer": "BCD",
    "analysis": "(B)root 預設無法登入。(C)/etc/nologin 是暫時禁止除 root 外所有人登入，內容為提示訊息而非名單。(D)已登入者不受影響。"
  },
  {
    "id": "L4010053",
    "question": "執行 route 指令查看路由表時，Default Gateway 的 Flags 為「UG」，代表什麼意思？",
    "options": [
      "停止該筆紀錄預設路由的功能",
      "使用動態路由，恢復路由資訊",
      "這個路由將不會被接受",
      "標示路由已啟動 (Up) 且需要透過 Gateway 轉遞"
    ],
    "answer": "D",
    "analysis": "U 代表 Up（啟動中），G 代表 Gateway。"
  },
  {
    "id": "L4010054",
    "question": "利用 route 指令查詢路由表，可以從中查看哪些資訊？(複選題)",
    "options": [
      "Source IP Address",
      "Destination IP Address",
      "Inbound Interface",
      "Outbound Interface"
    ],
    "answer": "BD",
    "analysis": "route指令輸出的訊息當中會有：Destination、Gateway、Genmask、Flags、Metric、… 與Interface。所以正確選項是(B)(D)"
  },
  {
    "id": "L4010055",
    "question": "Ubuntu 執行時，其核心內部的 IP 路由資訊會動態紀錄在哪一個檔案中？",
    "options": [
      "/proc/net/route_table",
      "/proc/net/ipx_route",
      "/proc/net/route",
      "/proc/net/default_route"
    ],
    "answer": "C",
    "analysis": "/proc 是虛擬檔案系統，/proc/net/route 紀錄了即時的路由資訊。"
  },
  {
    "id": "L4010056",
    "question": "關於 scp 指令的參數，下列哪一項明顯錯誤？",
    "options": [
      "-r 可以遞迴地複製整個目錄",
      "-q 可以顯示完整複製過程中的訊息",
      "-p 可以保留原始檔案的資訊（如修改日期與權限）",
      "-o 可以傳遞 ssh 的額外參數"
    ],
    "answer": "B",
    "analysis": "-q (quiet) 是安靜模式，會隱藏複製過程的訊息而非顯示完整訊息。"
  },
  {
    "id": "L4010057",
    "question": "關於 scp 的敘述，下列哪些正確？(複選題)",
    "options": [
      "scp是基於ssh的一種跨機器的遠端檔案拷貝工具程式",
      "scp跟ftp一樣，是透過port 21進行遠端連線",
      "scp可以利用-B參數選擇批次模式",
      "scp可以利用-4參數指定雙方使用IPv4建立連線"
    ],
    "answer": "ACD",
    "analysis": "(A)(C)(D)正確；(B)scp是基於SSH，也是使用port number 22。"
  },
  {
    "id": "L4010058",
    "question": "關於 SSH 伺服器的敘述，下列哪一項錯誤？(複選題)",
    "options": [
      "Ubuntu 22.04 的 root 帳號無法利用 SSH 登入遠端",
      "使用者家目錄下的 ~/.ssh/known_hosts 會記錄連線過的主機公鑰",
      "在 /etc/nologin 檔案中可設定 SSH 不可登入的使用者清單",
      "連線時若未指定帳號，系統將以本機目前帳號嘗試登入"
    ],
    "answer": "AC",
    "analysis": "(A)root 可透過修改設定開放登入。(C)/etc/nologin 並非條列名單用。"
  },
  {
    "id": "L4010059",
    "question": "關於 SCP、SSH 及 Telnet 的敘述，下列哪些正確？(複選題)",
    "options": [
      "SSH 會對資料加密，Telnet 則不會",
      "SCP 和 Telnet 均可以傳送資料到不同的電腦上",
      "\"ssh u1@server.abc.com runOnce\"表示使用者想要在遠端機器（server.abc.com）以使用者u1的權限來執行 指令runOnce",
      "SSH是使用Port number 22，而Telnet則是使用23"
    ],
    "answer": "ACD",
    "analysis": "(B)Telnet 是遠端登入工具而非檔案傳輸工具。"
  },
  {
    "id": "L4010060",
    "question": "在 /etc/sysctl.conf 檔案中，設定哪一項內容為 1 可在重啟後啟動路由轉送功能？",
    "options": [
      "net.ipv4.conf.default.ip_filter = 1",
      "net.ipv4.ip_forward = 1",
      "kernel.sysrq = 1",
      "kernel.core_uses_pid = 1"
    ],
    "answer": "B",
    "analysis": "ip_forward = 1 是開啟 Linux 路由轉送功能的標準設定。"
  },
  {
    "id": "L4010061",
    "question": "關於系統設定檔的敘述，下列哪些正確？(複選題)",
    "options": [
      "hosts.allow 主要是設定「允許哪些主機可以存取本機的網路服務」",
      "hosts.deny 檔案內預設沒有設定值，因此會拒絕所有主機存取服務",
      "hosts 包含主機網域名稱與 IP Address 的對應關係",
      "hosts.conf 設定本機的網路組態"
    ],
    "answer": "AC",
    "analysis": "(B)hosts.deny 若為空，代表不拒絕任何存取。(D)Linux 並無 hosts.conf 用於設定網路組態。"
  },
  {
    "id": "L4010062",
    "question": "當設定完成 hosts.allow 及 hosts.deny 這兩個檔案之後，需使用哪一方式啟用規則？",
    "options": [
      "必須執行 /etc/rc.d/init.d/xinetd restart",
      "hosts.allow及hosts.deny設定的規則去重新啟用相關服務",
      "需要reboot重新開機，新的規則才會啟用",
      "當hosts.allow及hosts.deny存檔後，新的規則即會自動啟用"
    ],
    "answer": "D",
    "analysis": "因為 TCP Wrapper並無cache機制，每次Client連線時就會直接參考這兩個設定檔，所以設定好hosts.allow與hosts.deny之後，內部設定的規則就會立刻生效。"
  },
  {
    "id": "L4010063",
    "question": "rsync是一種用於同步和備份檔案的實用工具程式，可以在本地或遠端系統之間進行有效地傳輸和同步檔案。關於指令rsync -avz /path/of/A/ user@remote:/path/of/B/，請問下列敘述哪一項錯誤？",
    "options": [
      "指令是將本機資料（/path/of/A）同步到遠端機器（/path/of/B）",
      "rsync也支援一些額外的進階資料同步功能，例如：增量備份、在遠端機器刪除來源伺服器上面已被刪除的檔案…等",
      "rsync可以保留同步檔案的相關屬性，如：擁有者、群組與權限",
      "rsync不支援連結檔與設備檔（devices）的同步"
    ],
    "answer": "D",
    "analysis": "rsync 支援連結檔與設備檔的同步，故 (D) 錯誤。"
  },
  {
    "id": "L4010064",
    "question": "下列哪些是 SFTP 和 FTP 的差異？(複選題)",
    "options": [
      "SFTP 使用公開金鑰加密方式",
      "SFTP 可以透過 Non-interactive 模式進行身份認證",
      "SFTP 使用 Port 22 而不是 FTP 的 21",
      "SFTP 的資料傳送速度比 FTP 快"
    ],
    "answer": "ABC",
    "analysis": "(D)SFTP 因為需要加解密運算，速度通常比傳統明文的 FTP 慢。"
  },
  {
    "id": "L4010065",
    "question": "關於 Telnet 的敘述，下列哪些正確？(複選題)",
    "options": [
      "Telnet Server 預設綁定的 Port Number 為 23",
      "Telnet 讓使用者利用客戶端程式登入遠端主機",
      "登入時帳號與密碼是以明文方式傳遞",
      "Telnet 客戶端程式只能連接到 Telnet Server，無法連接其他伺服器"
    ],
    "answer": "ABC",
    "analysis": "(D)錯誤，telnet 指令可用於測試其他 Port，例如連線 80 埠測試 WWW。"
  },
  {
    "id": "L4010066",
    "question": "iptables 內建了不同的表格（Tables），下列哪些是內定的表格？(複選題)",
    "options": [
      "FILTER",
      "NAT",
      "ROW",
      "MANGLE"
    ],
    "answer": "ABD",
    "analysis": "(C)錯誤，正確名稱應為 RAW 表格。"
  },
  {
    "id": "L4010067",
    "question": "iptables 的 NAT 表格中，包含哪些規則鏈（Chain）？(複選題)",
    "options": [
      "INPUT",
      "OUTPUT",
      "PREROUTING",
      "POSTROUTING"
    ],
    "answer": "BCD",
    "analysis": "NAT Table 包含 PREROUTING, POSTROUTING 與 OUTPUT，不包含 INPUT。"
  },
  {
    "id": "L4010068",
    "question": "關於主機的 NAT 功能基本設定，下列敘述哪一項正確？",
    "options": [
      "查看 /proc/sys/net/ipv4/ip_forward 的值是否設定為 1",
      "查看 /proc/sys/net/ipv4/ip_postrouting 的值是否設定為 1",
      "查看 /proc/sys/net/ipv4/ip_forward 的值是否設定為 0",
      "查看 /proc/sys/net/ipv4/ip_postrouting 的值是否設定為 0"
    ],
    "answer": "A",
    "analysis": "開啟 NAT 的前提是必須將 ip_forward 參數值設為 1 以允許封包轉送。"
  },
  {
    "id": "L4010069",
    "question": "若要查詢乙太網卡 enp0s3 的 IP Address，下列哪一個指令最為恰當？",
    "options": [
      "sudo ip address enp0s3",
      "sudo ip address show enp0s3",
      "sudo ip address device enp0s3",
      "sudo ip address show device enp0s3"
    ],
    "answer": "D",
    "analysis": "完整的 ip 工具語法為 sudo ip address show device <網卡名稱>。"
  },
  {
    "id": "L4010070",
    "question": "NAT 指令涉及 POSTROUTING 與 SNAT，將 192.168.1.0/24 轉換為 120.110.100.101，意義為何？",
    "image": "image/L4010070.PNG",
    "options": [
      "將該網段封包均轉向至 120.110.100.101",
      "凡是經過 120.110.100.101 的封包均轉至內網",
      "將 192.168.1.0/24 出去封包的來源網址轉換為 120.110.100.101",
      "將該網段預設路由設為 120.110.100.101"
    ],
    "answer": "C",
    "analysis": "SNAT (Source NAT) 用於將內部私有 IP 轉換為外部合法 IP 以外出至網路。"
  },
  {
    "id": "L4020001",
    "question": "在Ubuntu架設DHCP伺服器，要安裝下列哪一個套件？",
    "options": [
      "dhcp",
      "dhcpd",
      "dhcpd-server",
      "isc-dhcp-server"
    ],
    "answer": "D",
    "analysis": "Ubuntu 22.04沒有(A)(B)(C)套件，正確答案是(D)isc-dhcp-server。"
  },
  {
    "id": "L4020002",
    "question": "下列哪一個檔案是DHCP伺服器子網路範圍等組態的預設組態設定檔？",
    "options": [
      "/etc/default/isc-dhcp-server",
      "/etc/dhcp/dhcpd.conf",
      "/etc/init.d/isc-dhcp-server",
      "/etc/dhcpd/dhcp.conf"
    ],
    "answer": "B",
    "analysis": "(A)設定服務請求網卡、組態設定檔、PID檔等。(C)DHCP伺服器執行腳本。(D)沒有此路徑檔案。答案(B)。"
  },
  {
    "id": "L4020003",
    "question": "如附圖所示為DHCP組態設定檔中子網路及遮罩，請問下列X及Y的值何者適用？(複選題)",
    "image": "image/L4020003.PNG",
    "options": [
      "X=71　Y=100",
      "X=33　Y=88",
      "X=68　Y=92",
      "X=74　Y=94"
    ],
    "answer": "CD",
    "analysis": "204.254.239.64 netmask 255.255.255.224，網段IP範圍204.254.239.65 – 204.254.239.94，204.239.94.95為廣播IP，(A)(B)超出範圍。"
  },
  {
    "id": "L4020004",
    "question": "下列哪一項為DHCP伺服器及用戶端預設使用的埠號，server port/client port？",
    "options": [
      "68/67",
      "67/68",
      "67/53",
      "53/68"
    ],
    "answer": "B",
    "analysis": "DHCP server port 67, client port 68。"
  },
  {
    "id": "L4020005",
    "question": "下列哪些資料可以透過DHCP伺服器取得？(複選題)P",
    "options": [
      "IP address",
      "Gateway",
      "Netmask",
      "DNS Server IP"
    ],
    "answer": "ABCD",
    "analysis": "DHCP可分配包含IP、閘道、遮罩及DNS伺服器位址在內的所有基本網路參數。"
  },
  {
    "id": "L4020006",
    "question": "在DHCP伺服器預設組態設定檔中，設定IP最大租約時間為10分鐘，下列哪一項正確？",
    "options": [
      "max-lease-time 10;",
      "max-lease-time 600;",
      "option max-lease-time 600;",
      "option max-lease-time 10;"
    ],
    "answer": "B",
    "analysis": "數字單位為秒，10分鐘為600秒，且此參數不需要option宣告。"
  },
  {
    "id": "L4020007",
    "question": "如附圖所示，是在DHCP伺服器預設組態設定檔中的設定，請問可以指定給clients的IP總數多少？",
    "image": "image/L4020007.PNG",
    "options": [
      "5",
      "9",
      "14",
      "12"
    ],
    "answer": "C",
    "analysis": "26-30有5個IP，2-10有9個IP，可用IP共有14個。"
  },
  {
    "id": "L4020008",
    "question": "如附圖所示，是在DHCP伺服器預設組態設定檔中的設定，請問下列哪一項錯誤？",
    "image": "image/L4020008.PNG",
    "options": [
      "遮罩位元數26",
      "名稱伺服器example.org",
      "閘道10.0.0.1",
      "廣播位址10.0.0.63"
    ],
    "answer": "B",
    "analysis": "example.org是網域名稱，而非名稱伺服器IP。"
  },
  {
    "id": "L4020009",
    "question": "用戶端向DHCP伺服器成功取得IP的資訊，預設儲存在下列哪一個檔案？",
    "options": [
      "/var/lib/dhcp/dhcpd.leases",
      "/etc/dhcp/dhcpd.leases",
      "/usr/sbin/dhcp-lease-list",
      "/usr/share/doc/isc-dhcp-client"
    ],
    "answer": "A",
    "analysis": "(B)不存在。(C)是執行檔。(D)是文件檔。"
  },
  {
    "id": "L4020010",
    "question": "用戶端向DHCP伺服器成功取得IP資訊後，執行下列哪一個命令可以釋放已取得的IP？",
    "options": [
      "dhclient",
      "dhclient -r",
      "dhclient -s",
      "dhclient -d"
    ],
    "answer": "B",
    "analysis": "(A)從DHCP伺服器取得IP。(B)-r代表release，釋放取得的IP。"
  },
  {
    "id": "L4020011",
    "question": "如附圖所示，是在DHCP伺服器預設組態設定檔中的設定，指定網卡實體位址08:00:2b:4c:29:32，固定使用IP joe.example.com，請問關鍵字KEYWORD下列哪一項正確？",
    "image": "image/L4020011.PNG",
    "options": [
      "option",
      "pool",
      "host",
      "hardware"
    ],
    "answer": "C",
    "analysis": "host宣告可以指定用戶主機參數，用於靜態IP綁定。"
  },
  {
    "id": "L4020012",
    "question": "用戶端指定向DHCP伺服器tqc1要求IP資訊，可以使用下列哪一個命令？",
    "options": [
      "dhclient -p tqc1",
      "dhclient -r tqc1",
      "dhclient -s tqc1",
      "dhclient -d tqc1"
    ],
    "answer": "C",
    "analysis": "-s server-addr可用於指定特定的DHCP伺服器取得IP。"
  },
  {
    "id": "L4020013",
    "question": "在DHCP伺服器預設組態設定檔中，設定名稱伺服器為tq3，要使用下列哪一個宣告？",
    "options": [
      "option domain-name-servers tq3;",
      "option domain-name tq3;",
      "option routers tq3;",
      "option dhcp-server tq3;"
    ],
    "answer": "A",
    "analysis": "(A)設定DNS名稱伺服器的正確選項語法。(B)設定網域名稱。"
  },
  {
    "id": "L4020014",
    "question": "NFS伺服器的用途為下列哪一項？",
    "options": [
      "動態分配IP的伺服器",
      "檔案分享給Windows用戶",
      "Linux的時間伺服器",
      "檔案分享給Linux用戶"
    ],
    "answer": "D",
    "analysis": "(A)DHCP。(B)SAMBA。(C)ntpd、chronyd。(D)NFS專用於Unix/Linux間的檔案分享。"
  },
  {
    "id": "L4020015",
    "question": "下列哪一項是DHCP伺服器的用途？",
    "options": [
      "動態分配IP的伺服器",
      "檔案分享給Windows用戶",
      "Linux的時間伺服器",
      "檔案分享給Linux用戶"
    ],
    "answer": "A",
    "analysis": "(A)DHCP。(B)SAMBA。(C)ntpd、chronyd。(D)NFS。"
  },
  {
    "id": "L4020016",
    "question": "下列哪一項不能做為Samba伺服器組態設定的全域指令？",
    "options": [
      "workgroup",
      "comment",
      "interfaces",
      "logging"
    ],
    "answer": "B",
    "analysis": "在smb.conf中，並沒有comment的全域指令，請參考smb.conf的官方文件。"
  },
  {
    "id": "L4020017",
    "question": "在Ubuntu架設NFS伺服器，要安裝下列哪一個套件？",
    "options": [
      "nfs-server",
      "nfs",
      "nfs-kernel-server",
      "nfs-tools"
    ],
    "answer": "C",
    "analysis": "Ubuntu 22.04沒有(A)(B)(D)套件，正確答案是(C)nfs-kernel-server。"
  },
  {
    "id": "L4020018",
    "question": "下列哪一個檔案為NFS伺服器分享目錄的設定檔？",
    "options": [
      "/etc/exports",
      "/usr/share/nfs",
      "/etc/export",
      "/proc/filesystem"
    ],
    "answer": "A",
    "analysis": "/etc/exports 是 NFS 的核心設定檔。(B)(C)無此檔案，(D)為kernel支援的檔案系統資訊。"
  },
  {
    "id": "L4020019",
    "question": "請問可由下列哪一項指令查看NFS伺服器tqc2分享的目錄？",
    "options": [
      "showmount tqc2",
      "showmount -f tqc2",
      "showmount -h tqc2",
      "showmount -e tqc2"
    ],
    "answer": "D",
    "analysis": "-e 或 --exports 選項可用於列出指定 NFS 伺服器所分享（匯出）的目錄。"
  },
  {
    "id": "L4020020",
    "question": "用戶端以uid為0的身份對NFS主機送出分享目錄請求時，要將uid對應成匿名者（nobody）的uid，以壓縮其權限，NFS主機設定必須使用下列哪一項參數？",
    "options": [
      "no_all_squash",
      "nfsnobody",
      "root_squash",
      "no_root_squash"
    ],
    "answer": "C",
    "analysis": "(A)不對應所有用戶端用戶的uid。(B)沒這個選項。(D)不對應用戶root的uid。"
  },
  {
    "id": "L4020021",
    "question": "用戶端以任何身份對NFS伺服器送出分享目錄請求時，都將其uid對應成匿名者（nobody）的uid，以壓縮其權限，NFS伺服器設定必須使用下列哪一項參數？",
    "options": [
      "all_squash",
      "nobody",
      "no_all_squash",
      "root_squash"
    ],
    "answer": "A",
    "analysis": "(B)沒這個選項。(C)不對應所有用戶端用戶的uid。(D)對應用戶root的uid。"
  },
  {
    "id": "L4020022",
    "question": "用戶端對NFS伺服器送出存取請求後，NFS伺服器要等到讀寫改變確實在穩定的儲存空間完成才回應，NFS伺服器設定必須使用下列哪一項參數？",
    "options": [
      "async",
      "sync",
      "rw",
      "secure"
    ],
    "answer": "B",
    "analysis": "sync 代表同步寫入，確保資料完成寫入磁碟後才回應成功；(A)不同步，與sync相反。(C)可讀可寫。(D)請求埠號必須小於1024。"
  },
  {
    "id": "L4020023",
    "question": "NFS伺服器的分享設定檔中，下列哪些設定正確？(複選題)",
    "options": [
      "/　　　master(rw) trusty(rw,no_root_squash)",
      "/usr　　　*.local.domain(ro) @trusted(rw)",
      "/home/joe　　　pc001(rw,all_squash,anonuid=150,anongid=100)",
      "/build　　　buildhost[0-9].local.domain(rw)"
    ],
    "answer": "ABCD",
    "analysis": "以上皆為 /etc/exports 中合法的分享語法與主機限制方式。"
  },
  {
    "id": "L4020024",
    "question": "「/share　　mtc(rw,all_squash)」為NFS伺服器分享設定檔的一列設定，請問下列敘述哪一項正確？",
    "options": [
      "mtc主機可掛載/share目錄，能用nobody身分進入，可讀寫/share",
      "mtc主機可掛載/share目錄，不能用nobody身分進入，但可讀寫/share",
      "mtc主機可掛載/share目錄，若登入會被視為nobody，可讀寫/share",
      "mtc主機可掛載/share目錄，會以原本的身分進入，可讀寫/share"
    ],
    "answer": "C",
    "analysis": "all_squash 參數代表任何使用者登入都會被對應成 nobody 權限，且具有 rw (讀寫) 能力。"
  },
  {
    "id": "L4020025",
    "question": "「/share　　*(rw)」是NFS伺服器tqc5分享設定檔的一列設定，請問下列哪一項可讓NFS用戶端把分享目錄掛載到自己的檔案系統？",
    "options": [
      "mount share@tqc5",
      "mount tqc5:/share /mnt/share",
      "mount -t vfat tqc5:/share",
      "mount /mnt/share tqc5:/share"
    ],
    "answer": "B",
    "analysis": "標準 mount 語法為：mount 伺服器IP或名稱:分享目錄 本地掛載點。"
  },
  {
    "id": "L4020026",
    "question": "NFS客戶端可用下列哪些指令查詢掛載選項，例如掛載版本？(複選題)",
    "options": [
      "nfsstat -m",
      "mount -a",
      "grep nfs /etc/mtab",
      "mount | grep nfs"
    ],
    "answer": "ACD",
    "analysis": "(B) mount -a 是掛載 /etc/fstab 中的所有項目，無法直接查詢掛載細節。其餘指令皆可查詢目前的掛載狀態。"
  },
  {
    "id": "L4020027",
    "question": "下列哪一個NFS版本，可以不需要rpcbind服務，只啟動NFS服務？",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "D",
    "analysis": "NFSv1只在開發中實驗，NFSv2 NFSv3需要用rpcbind。"
  },
  {
    "id": "L4020028",
    "question": "關閉NFSv2與NFSv3，只開啟NFSv4服務，要在下列哪一個檔案的[nfsd] section設定vers2=n vers3=n？",
    "options": [
      "/etc/nfs.conf",
      "/etc/default/nfs-common",
      "/etc/default/nfs-kernel-server",
      "/etc/nfsd.conf"
    ],
    "answer": "A",
    "analysis": "(B)(C)參數設定，沒有nfsd section。(D)無此檔案。"
  },
  {
    "id": "L4020029",
    "question": "NFS客戶端鎖定NFS掛載目錄/mnt/nfsmount下的檔案abc，執行top指令，要執行下列哪一個指令？",
    "options": [
      "flock -s /mnt/nfsmount/abc -c top",
      "flock /mnt/nfsmount/abc -c top",
      "filelock /mnt/nfsmount/abc -e top",
      "filelock -s /mnt/nfsmount/abc top"
    ],
    "answer": "B",
    "analysis": "(A)flock -s選項是取得shared lock。(C)(D)filelock無此指令。"
  },
  {
    "id": "L4020030",
    "question": "下列哪一種服務可以處理檔案分享及列印分享？",
    "options": [
      "SMB",
      "NFS",
      "FTP",
      "HTTP"
    ],
    "answer": "A",
    "analysis": "SMB (Samba) 同時支援檔案共享與印表機共享服務，其餘服務主要僅針對檔案傳輸或展示。"
  },
  {
    "id": "L4020031",
    "question": "下列哪一項是Samba伺服器的分享設定檔？",
    "options": [
      "/etc/samba/samba.conf",
      "/etc/smb/smb.conf",
      "/etc/smb/samba.conf",
      "/etc/samba/smb.conf"
    ],
    "answer": "D",
    "analysis": "(A)(B)(C)無此檔案。Samba 的核心設定檔路徑固定為 /etc/samba/smb.conf。"
  },
  {
    "id": "L4020032",
    "question": "Ubuntu建置Samba伺服器要使用下列哪一個指令安裝套件？",
    "options": [
      "yum install samba",
      "dnf install samba",
      "apt install samba",
      "apt-file install samba"
    ],
    "answer": "C",
    "analysis": "Ubuntu 屬於 Debian 系列，使用 apt 作為套件管理工具。(A)(B)為 Red-Hat 系列指令，(D)apt-file 用於搜尋檔案所屬套件。"
  },
  {
    "id": "L4020033",
    "question": "下列哪一項可以檢查Samba伺服器分享設定檔的語法是否正確？",
    "options": [
      "testparm",
      "checksmbconf",
      "smb-check",
      "checkparm"
    ],
    "answer": "A",
    "analysis": "testparm 是 Samba 內建的語法檢查工具，可確認 smb.conf 設定是否正確。(B)(C)(D)無此檔案。"
  },
  {
    "id": "L4020034",
    "question": "若要新增名為lin的Samba帳號，下列哪些正確？(複選題)",
    "options": [
      "adduser lin",
      "smbpasswd -u lin",
      "pdbedit -a -u lin",
      "smbpasswd -a lin"
    ],
    "answer": "CD",
    "analysis": "(C) pdbedit 與 (D) smbpasswd -a 皆可用於新增 Samba 帳號。(A) 為新增 Linux 系統帳號，(B) 指令語法錯誤。"
  },
  {
    "id": "L4020035",
    "question": "如果Linux系統/etc/passwd中沒有lin帳號，而要新增名為lin的Samba帳號，下列敘述哪一項正確？",
    "options": [
      "Samba的帳號與Linux系統帳號無關，可以新增",
      "新增命令回應無法新增",
      "新增成功，但無法登入Samba伺服器",
      "新增成功，但無法設定帳號密碼"
    ],
    "answer": "B",
    "analysis": "Samba 帳號必須建立在已存在的 Linux 系統帳號之上，若 /etc/passwd 沒人，則無法新增對應的 Samba 帳號。"
  },
  {
    "id": "L4020036",
    "question": "Samba分享資源，要指定群組teacher的用戶都可寫入，下列哪一項設定正確？",
    "options": [
      "writable = teacher",
      "writable = @teacher",
      "write list = teacher",
      "write list = @teacher"
    ],
    "answer": "D",
    "analysis": "在 Samba 設定中，群組名稱前需加上「@」或「+」符號。write list 用於指定可寫入的使用者或群組。"
  },
  {
    "id": "L4020037",
    "question": "Samba分享資源，要設定用戶root不能登入使用，下列哪一項設定正確？",
    "options": [
      "invalid users = root",
      "invalid list = root",
      "valid users = root",
      "valid list = root"
    ],
    "answer": "A",
    "analysis": "invalid users 用於設定禁止登入的黑名單。(B)(D)不正確語法。(C)可以登入的用戶root。"
  },
  {
    "id": "L4020038",
    "question": "Samba伺服器tqc7分享資源common，用戶端要測試帳號lin密碼123是否可登入此一資源，可以使用下列哪一個命令？",
    "options": [
      "smbclient //tqc7/common -u lin%123",
      "smbclient //tqc7/common -U lin%123",
      "smbclient -L //tqc7/common -U lin%123",
      "smbclient -L //tqc7/common -u lin%123"
    ],
    "answer": "B",
    "analysis": "smbclient 使用大寫 -U 指定使用者，格式為「使用者%密碼」。(A)(D)smbclient，沒有-u選項。(C)-L選項列出分享資源，跟common的登入設定無關。"
  },
  {
    "id": "L4020039",
    "question": "Samba分享資源，要設定網段192.168.11.0/24都可以登入使用，下列哪些設定正確？(複選題)",
    "options": [
      "hosts allow = 192.168.11.",
      "hosts allow = 192.168.11.0/255.255.255.0",
      "hosts allow = 192.168.11.0/24",
      "hosts allow = 192.168.11"
    ],
    "answer": "ABC",
    "analysis": "(A)(B)(C) 皆為 Samba 認可的網段表示法。(D) 僅代表 IP 為 192.168.11 的單一主機（格式不完整）。"
  },
  {
    "id": "L4020040",
    "question": "Samba分享資源，分享設定檔中hosts allow = 要使用網域名稱，必須在global section開啟主機名稱查詢，下列哪一項設定開啟此項查詢？",
    "options": [
      "dns search = yes",
      "dns allow = yes",
      "domainname lookups = yes",
      "hostname lookups = yes"
    ],
    "answer": "D",
    "analysis": "hostname lookups = yes 用於開啟將 IP 反查為主機名稱的功能，以便進行網域名稱比對。"
  },
  {
    "id": "L4020041",
    "question": "Linux用戶端要掛載Samba伺服器分享資源，要安裝下列哪一個套件？",
    "options": [
      "cifs-utils",
      "cifs-tools",
      "dosfstools",
      "dosfs-utils"
    ],
    "answer": "A",
    "analysis": "cifs-utils 提供 mount.cifs 指令，是 Linux 掛載 SMB/CIFS 分享目錄的必要工具。"
  },
  {
    "id": "L4020042",
    "question": "下列哪一項是Linux掛載Samba分享的指令？",
    "options": [
      "smbclient",
      "mount.cifs",
      "mount.smb",
      "smbget"
    ],
    "answer": "B",
    "analysis": "掛載指令為 mount.cifs (或 mount -t cifs)。smbclient 是類似 FTP 的存取工具，並非掛載指令。"
  },
  {
    "id": "L4020043",
    "question": "成功登入Samba伺服器分享目錄後，出現互動式命令列，請問下列哪一項「不是」登入後可以使用的內部指令？",
    "image": "image/L4020043.PNG",
    "options": [
      "?",
      "get",
      "mget",
      "cp"
    ],
    "answer": "D",
    "analysis": "smbclient 的互動指令類似 FTP，如 get, mget, put 等。cp 是 Linux Shell 的外部指令，無法在 smbclient 內部直接執行。"
  },
  {
    "id": "L4020044",
    "question": "Samba伺服器tqc8分享資源common，請問下列哪一項指令可以使用帳號lin密碼123登入？",
    "options": [
      "smbclient //tqc8/common -U lin%123",
      "smbclient //tqc8/common -U lin:123",
      "smbclient //tqc8/common -U lin -P 123",
      "smbclient //tqc8/common -P lin%123"
    ],
    "answer": "A",
    "analysis": "正確語法為 smbclient //伺服器/分享資源 -U 使用者%密碼。"
  },
  {
    "id": "L4020045",
    "question": "Samba伺服器tqc9分享資源common，請問下列哪一項指令可以使用帳號lin密碼123掛載common到目錄/mnt/smbdir？",
    "options": [
      "smbclient -o username=lin%123 //tqc9/common /mnt/smbdir/",
      "smbclient -o username=lin,password=123 //tqc9/common /mnt/smbdir/",
      "mount -o username=lin,password=123 //tqc9/common /mnt/smbdir/",
      "mount -o username=lin%123 //tqc9/common /mnt/smbdir/"
    ],
    "answer": "C",
    "analysis": "掛載使用 mount 指令，參數透過 -o 帶入。正確格式為 username=帳號,password=密碼。(D) 的 % 語法通常用於 smbclient 而非 mount。"
  },
  {
    "id": "L4030001",
    "question": "下列哪些指令可以用來查詢DNS正/反解？(複選題)",
    "options": [
      "nslookup",
      "host",
      "resolv",
      "dig"
    ],
    "answer": "ABD",
    "analysis": "nslookup、host 與 dig 皆為常用的 DNS 查詢指令。(C) resolv 實際上是指 /etc/resolv.conf 設定檔，並非查詢指令。"
  },
  {
    "id": "L4030002",
    "question": "關於正解區域檔（Forward Zone File）的功能，下列敘述哪一項正確？",
    "options": [
      "將IP位址對應到主機名稱",
      "將IP位址對應到NetBIOS的主機名稱",
      "將主機名稱對應到IP位址",
      "將NetBIOS的主機名稱對應到IP位址"
    ],
    "answer": "C",
    "analysis": "正解 (Forward) 的功能是將「主機名稱」解析為「IP 位址」；(A) 為反解功能。"
  },
  {
    "id": "L4030003",
    "question": "下列哪一項是BIND（Berkeley Internet Name Domain）的Daemon（守護進程）？",
    "options": [
      "bind",
      "xinetd",
      "named",
      "dnsd"
    ],
    "answer": "C",
    "analysis": "BIND 套件所運行的守護進程名稱為 named。"
  },
  {
    "id": "L4030004",
    "question": "設定DNS Server啟動時發生錯誤，請問下列哪一個log檔會記錄錯誤原因？",
    "options": [
      "/var/log/messages",
      "/var/log/maillog",
      "/var/log/secure",
      "/var/log/rpmpkgs"
    ],
    "answer": "A",
    "analysis": "(A) /var/log/messages 紀錄系統的一般性訊息與服務啟動錯誤；(B) 為郵件紀錄；(C) 為安全與認證紀錄。"
  },
  {
    "id": "L4030005",
    "question": "可使用下列哪一個指令來測試DNS伺服器？",
    "options": [
      "dns",
      "bind",
      "ping",
      "nslookup"
    ],
    "answer": "D",
    "analysis": "nslookup 是專門用來查詢與測試 DNS 伺服器解析功能的指令。"
  },
  {
    "id": "L4030006",
    "question": "下列哪一個設定檔是BIND（Berkeley Internet Name Domain）的工作環境設定檔？",
    "options": [
      "named.local",
      "named.ca",
      "localhost.zone",
      "named.conf"
    ],
    "answer": "D",
    "analysis": "named.conf 是 BIND 的主要核心設定檔，用於定義全域選項與區域宣告。"
  },
  {
    "id": "L4030007",
    "question": "一般而言，下列哪一個設定檔是BIND（Berkeley Internet Name Domain）的根網域記錄檔？",
    "options": [
      "named.local",
      "named.ca",
      "localhost.zone",
      "named.conf"
    ],
    "answer": "B",
    "analysis": "named.ca (或稱為 root.hints) 包含了全球 13 台根網域名稱伺服器的資訊。"
  },
  {
    "id": "L4030008",
    "question": "當使用者提出名稱解析要求（DNS）時，是依照下列哪一個檔案所列的名稱伺服器順序來尋求服務？",
    "options": [
      "/etc/named.conf",
      "/etc/resolv.conf",
      "/etc/host.conf",
      "/etc/nsswitch.conf"
    ],
    "answer": "B",
    "analysis": "/etc/resolv.conf 是用戶端設定 DNS 伺服器 IP 位址的地方。"
  },
  {
    "id": "L4030009",
    "question": "whois指令可以協助管理者查詢到當初註冊DNS網域名稱時所填寫的使用者相關資訊，請問使用whois時，whois後面需填入下列哪一種資訊方能查詢相關資料？",
    "options": [
      "查詢的IP Address",
      "DNS網域名稱伺服器",
      "查詢的主機名稱",
      "查詢的網域名稱"
    ],
    "answer": "D",
    "analysis": "whois 通常接「網域名稱」（如 google.com）來查詢註冊單位、到期日等公開資訊。"
  },
  {
    "id": "L4030010",
    "question": "下列哪一項為提供DNS服務的伺服軟體？",
    "options": [
      "Apache",
      "Samba",
      "BIND",
      "IIS"
    ],
    "answer": "C",
    "analysis": "BIND 是目前 Linux 環境中最主流的 DNS 伺服器軟體。"
  },
  {
    "id": "L4030011",
    "question": "在DNS的主要組態檔/etc/named.conf裡的參數中，下列哪一項用來指定zone file的目錄位置？",
    "options": [
      "directory",
      "location",
      "catalog",
      "zone"
    ],
    "answer": "A",
    "analysis": "在 options 區段中，使用 directory 指令來指定資料庫檔案（Zone files）的存放路徑。"
  },
  {
    "id": "L4030012",
    "question": "關於反解區域檔的功能，下列敘述哪一項正確？",
    "options": [
      "將IP位址對應到主機名稱",
      "將IP位址對應到NetBIOS的主機名稱",
      "將主機名稱對應到IP位址",
      "將NetBIOS的主機名稱對應到IP位址"
    ],
    "answer": "A",
    "analysis": "反解 (Reverse) 是將「IP 位址」解析回「主機名稱」，主要使用 PTR 紀錄。"
  },
  {
    "id": "L4030013",
    "question": "下列哪些為合法的反解區域？(複選題)",
    "options": [
      "zone \"0.0.127.in-addr.arpa\"",
      "zone \"1.168.192.in-addr.arpa\"",
      "zone \"0.0.127\"",
      "zone \"1.168.192\""
    ],
    "answer": "AB",
    "analysis": "標準的反解區域必須以「in-addr.arpa」結尾，且 IP 順序需反寫。"
  },
  {
    "id": "L4030014",
    "question": "下列哪一項為我國com.tw網域名稱之類別及申請資格？",
    "options": [
      "依公司法登記之公司或依商業登記法登記之商號",
      "依法設立之政府機關",
      "依法登記之財團法人或社團法人",
      "個人（具中華民國國籍之國民）"
    ],
    "answer": "A",
    "analysis": ".com.tw 代表 Commercial（商業），故須具備公司或商號登記資格。"
  },
  {
    "id": "L4030015",
    "question": "下列哪一項為我國idv.tw網域名稱之類別及申請資格？",
    "options": [
      "依公司法登記之公司或依商業登記法登記之商號",
      "依法設立之政府機關",
      "依法登記之財團法人或社團法人",
      "個人（具中華民國國籍之國民）"
    ],
    "answer": "D",
    "analysis": ".idv.tw 代表 Individual（個人），開放給具備中華民國國籍之國民申請。"
  },
  {
    "id": "L4030016",
    "question": "下列哪一個named的選項可以設定named的程序擁有者？",
    "options": [
      "-U",
      "-l",
      "-u",
      "–L"
    ],
    "answer": "C",
    "analysis": "在 BIND 的 named 伺服器程式中，可以使用 -u 選項來指定執行該程序的系統使用者（擁有者），以增加安全性。"
  },
  {
    "id": "L4030017",
    "question": "關於DNS（Domain Name System）的主要目的，下列哪一項正確？",
    "options": [
      "保護網站免受DDoS攻擊",
      "加密網站資料",
      "將網域名稱解析為IP地址",
      "管理電子郵件的傳送"
    ],
    "answer": "C",
    "analysis": "DNS 的核心功能是將人類易記的「網域名稱」解析為電腦通訊用的「IP 位址」。"
  },
  {
    "id": "L4030018",
    "question": "如果一個用戶嘗試訪問一個網站，而該網站的域名資訊不在本地DNS快取中，則該請求會首先傳送到哪裡？",
    "options": [
      "主域名伺服器",
      "根網域名伺服器",
      "作者域名伺服器",
      "逆向域名伺服器"
    ],
    "answer": "B",
    "analysis": "當遞迴查詢無法從快取獲得答案時，查詢會從「根域名伺服器 (.)」開始向下一層層追蹤。"
  },
  {
    "id": "L4030019",
    "question": "關於DNSSEC的用途，下列哪一項正確？",
    "options": [
      "加速DNS查詢",
      "減少DNS查詢的成本",
      "保護DNS查詢免受篡改",
      "壓縮DNS資料以節省空間"
    ],
    "answer": "C",
    "analysis": "DNSSEC（DNS 安全擴充）透過數位簽章技術，確保 DNS 資料的完整性與來源正確性，防止 DNS 欺騙與篡改。"
  },
  {
    "id": "L4030020",
    "question": "當您想從域名查找其相應的IP地址時，屬於下列哪一項操作？",
    "options": [
      "反解查詢",
      "正解查詢",
      "領域查詢",
      "權威查詢"
    ],
    "answer": "B",
    "analysis": "從網域名稱查詢 IP 稱為「正解查詢 (Forward Lookup)」。"
  },
  {
    "id": "L4030021",
    "question": "當您從一個IP地址查找其相對應的域名時，屬於下列哪一項操作？",
    "options": [
      "反解查詢",
      "正解查詢",
      "領域查詢",
      "權威查詢"
    ],
    "answer": "A",
    "analysis": "從 IP 位址查詢網域名稱稱為「反解查詢 (Reverse Lookup)」。"
  },
  {
    "id": "L4030022",
    "question": "負責管理特定頂級域（如 .com或 .org）下所有域名的機構或公司，稱為下列哪一項？",
    "options": [
      "DNS伺服器",
      "域名註冊商",
      "網域註冊機構",
      "NS伺服器"
    ],
    "answer": "C",
    "analysis": "網域註冊機構 (Registry) 負責管理特定頂級網域的資料庫；域名註冊商 (Registrar) 則是面向一般用戶提供註冊服務的公司。"
  },
  {
    "id": "L4030023",
    "question": "下列哪一項資源紀錄，是用來指示哪個網域名稱伺服器對於某網域具有權威性？",
    "options": [
      "NS",
      "MX",
      "CNAME",
      "A"
    ],
    "answer": "A",
    "analysis": "NS (Name Server) 紀錄用於指定該網域由哪些 DNS 伺服器負責管理。"
  },
  {
    "id": "L4030024",
    "question": "下列哪一項設定可以讓子網域ftp.example.com具有指向其根網域example.com的CNAME資源紀錄？",
    "options": [
      "ftp　IN　CNAME　example.com",
      "ftp　IN　CNAME　example.com.",
      "example.com　IN　CNAME　ftp",
      "example.com.　IN　CNAME　ftp"
    ],
    "answer": "B",
    "analysis": "CNAME 設定中，右側的目標主機名稱若為完整的網域名稱，結尾必須加上代表根域的「.」。"
  },
  {
    "id": "L4030025",
    "question": "下列哪一項資源紀錄是用來指定網域名稱對應到的IPv4位址？",
    "options": [
      "NS",
      "MX",
      "CNAME",
      "A"
    ],
    "answer": "D",
    "analysis": "A (Address) 紀錄用於將主機名稱對應到 32 位元的 IPv4 位址。"
  },
  {
    "id": "L4030026",
    "question": "下列哪一項資源紀錄是用來指定網域名稱對應到的IPv6位址？",
    "options": [
      "A",
      "A6",
      "AAAA",
      "AAAAAA"
    ],
    "answer": "C",
    "analysis": "AAAA 紀錄用於將主機名稱對應到 128 位元的 IPv6 位址。"
  },
  {
    "id": "L4030027",
    "question": "下列哪一項資源紀錄的設定，可讓同一個IP位址擁有不同的網域名稱？",
    "options": [
      "MX",
      "A",
      "CNAME",
      "NS"
    ],
    "answer": "C",
    "analysis": "CNAME (Canonical Name) 為別名紀錄，可以讓多個不同的名稱指向同一個正式名稱（最終對應到同一個 IP）。"
  },
  {
    "id": "L4030028",
    "question": "如附圖所示，為一網域名稱伺服器BIND的正解區域檔部分內容，當客戶端向其查詢主機www的IP位址時，請問下列哪一項敘述正確？",
    "image": "image/L4030028.PNG",
    "options": [
      "BIND僅會回覆IP位址10.0.0.1",
      "BIND從三個IP位址（10.0.0.1、10.0.0.2、10.0.0.3）隨機挑選一個來回覆",
      "BIND從三個IP位址（10.0.0.1、10.0.0.2、10.0.0.3）依序取出三個來回覆",
      "BIND從三個IP位址（10.0.0.1、10.0.0.2、10.0.0.3）隨機挑選三個來回覆"
    ],
    "answer": "D",
    "analysis": "當同一個主機名稱對應到多個 A 紀錄時，BIND 會回覆所有的 IP 位址，這是一種簡單的負載平衡（Round Robin）機制。"
  },
  {
    "id": "L4030029",
    "question": "負責DNS區域140.140.in-addr.arpa的反解區域檔中，下列哪一項設定可以讓IPv4位址140.140.3.4解析出example.com.？",
    "options": [
      "140.140.3.4　IN　PTR　example.com.",
      "3.4　IN　PTR　example.com.",
      "4.3　IN　PTR　example.com.",
      "4.3.140.140　IN　PTR　example.com."
    ],
    "answer": "C",
    "analysis": "反解區域設定中，IP 的 Host ID 部分需「反向」書寫。在 140.140.in-addr.arpa 區域下，剩餘的 3.4 應寫為 4.3。"
  },
  {
    "id": "L4030030",
    "question": "下列哪一項是每個DNS正/反解區域檔中只能出現一次的資源紀錄？",
    "options": [
      "NS",
      "MX",
      "CNAME",
      "SOA"
    ],
    "answer": "D",
    "analysis": "SOA (Start Of Authority) 為授權起點紀錄，每個區域檔必須有且僅能有一個，且必須位於檔案的第一筆紀錄。"
  },
  {
    "id": "L4030031",
    "question": "如附圖所示，為一正解區域檔部分內容，若許多人想寄電子郵件到admin@example.com時，下列敘述哪一項正確？",
    "image": "image/L4030031.PNG",
    "options": [
      "mailhost1郵件伺服器接收10封電子郵件後，換mailhost2郵件伺服器接收20封電子郵件，並依此循環",
      "電子郵件會先寄到mailhost1郵件伺服器，若失敗才會改寄到mailhost2郵件伺服器",
      "電子郵件會先寄到mailhost2郵件伺服器，若失敗才會改寄到mailhost1郵件伺服器",
      "兩台郵件伺服器隨機接收電子郵件，但大致上mailhost1郵件伺服器接收的郵件量會是mailhost2郵件伺服器的一半"
    ],
    "answer": "B",
    "analysis": "MX 資源紀錄中的數字代表「優先權（Preference）」，數字越低表示優先等級越高。因此郵件會先嘗試遞送至 mailhost1（10），失敗後才嘗試 mailhost2（20）。"
  },
  {
    "id": "L4030032",
    "question": "TXT資源紀錄的值可以用來描述寄件者原則架構（SPF）紀錄。若SPF TXT紀錄內容最後方的限定詞是~all，且電子郵件的來源IP位址沒有列在SPF紀錄中時，下列敘述哪一項正確？",
    "options": [
      "郵件可被接受但應標記為垃圾郵件",
      "郵件應拒收",
      "郵件可被正常接受",
      "中立，由接收郵件的伺服器自行決定如何處理所收到的郵件"
    ],
    "answer": "A",
    "analysis": "SPF 限定詞說明：~all 表示 Soft Fail（軟失敗），通常郵件會被接收但標記為垃圾郵件；-all 表示 Fail（硬失敗），郵件應被拒收。"
  },
  {
    "id": "L4030033",
    "question": "TXT資源紀錄可以用來描述網域金鑰識別郵件（DKIM）紀錄，關於DKIM TXT紀錄的內容欄位，下列敘述哪一項正確？",
    "options": [
      "v=1表示使用第1版的DKIM規範",
      "標籤k=用來描述公開金鑰的內容",
      "標籤p=用來描述公開金鑰的內容",
      "公開金鑰的內容使用DER編碼"
    ],
    "answer": "C",
    "analysis": "DKIM 紀錄中，v= 必須為 DKIM1；k= 是金鑰演算法（如 rsa）；p= 則是經過 Base64 編碼的公開金鑰內容。"
  },
  {
    "id": "L4030034",
    "question": "TXT資源紀錄可以用來描述 DMARC 紀錄，關於DMARC TXT紀錄的內容欄位，下列敘述哪一項正確？",
    "options": [
      "標籤p=quarantine表示未通過DMARC機制的電子郵件應當設為垃圾郵件或標記為可疑",
      "標籤p=none表示未通過DMARC機制的電子郵件不該放行",
      "fo=1表示收到的電子郵件未通過所有的合法性檢查機制時，產生DMARC失敗報告",
      "標籤v=並非必要，但若有出現的話則須寫在內容欄位的開頭"
    ],
    "answer": "A",
    "analysis": "DMARC 標籤 p= (Policy) 的選項包括：none (不處理)、quarantine (隔離/垃圾郵件)、reject (拒收)。v=DMARC1 是必須且置於開頭的標籤。"
  },
  {
    "id": "L4030035",
    "question": "名稱伺服器上許多種資源紀錄都可以協助電子郵件伺服器判斷收到的電子郵件是否可能為垃圾郵件，下列哪一種資源紀錄沒有辦法協助判斷？",
    "options": [
      "PTR",
      "MX",
      "SPF TXT",
      "DKIM TXT"
    ],
    "answer": "B",
    "analysis": "MX 紀錄僅告訴發信方「誰負責接收該網域的郵件」。而 PTR (反解)、SPF、DKIM 則是用來驗證發信方身份合法性，防範垃圾郵件。"
  },
  {
    "id": "L4030036",
    "question": "SRV紀錄可為特定的服務指定伺服器和連接埠，若 AD1 (優先順序1、權重3) 與 AD2 (優先順序2、權重1) 皆正常運行，關於連線數量敘述何者正確？",
    "options": [
      "全部都是AD1在服務",
      "全部都是AD2在服務",
      "AD1服務的連線數量是AD2的3倍",
      "AD1服務的連線數量是AD2的一半"
    ],
    "answer": "A",
    "analysis": "SRV 紀錄會先比較「優先順序（Priority）」，數值小者優先。只有當優先順序相同時，才會依照「權重（Weight）」分配流量。"
  },
  {
    "id": "L4030037",
    "question": "如附圖所示，為某台名稱伺服器的/etc/bind/named.conf檔案部分內容，請問下列敘述哪一項錯誤？",
    "image": "image/L4030037.PNG",
    "options": [
      "對於DNS區域example.com而言，該台名稱伺服器是次要名稱伺服器",
      "對於DNS區域example.com而言，主要名稱伺服器的IP位址是192.168.254.2",
      "該台名稱伺服器會將區域example.com的正解區域檔案儲存在/etc/bind/",
      "NS區域example.com而言，該台名稱伺服器是次要名稱伺服器"
    ],
    "answer": "C",
    "analysis": "在 named.conf 中若指定了 directory \"/var/cache/bind\"，則 zone 設定中的相對路徑檔案會儲存在該目錄下，而非 /etc/bind/。"
  },
  {
    "id": "L4030038",
    "question": "如附圖所示，為一DNS區域example.com的正反解區域檔案之SOA紀錄，請問下列敘述哪一項錯誤？",
    "image": "image/L4030038.PNG",
    "options": [
      "ns1.example.com是MNAME欄位，表示區域example.com的主要名稱伺服器之網域名稱",
      "hostmaster.example.com是RNAME欄位，表示區域example.com的管理員電子郵件地址為hostmaster@example.com",
      "第一個3是serial，被次要名稱伺服器用來判斷主要名稱伺服器的正反解區域檔案是否有更新",
      "SOA紀錄一開頭的@表示hostmaster.example.com，第一個「.」要被代換為「@」"
    ],
    "answer": "D",
    "analysis": "SOA 紀錄開頭的 @ 代表的是「目前的區域名稱（Zone Name）」，即檔案所屬的網域（如 example.com），並非管理員郵件。"
  },
  {
    "id": "L4030039",
    "question": "下列哪一項不是建置次要名稱伺服器（Slave/Secondary DNS）的優點？",
    "options": [
      "建立備援",
      "次要名稱伺服器可隱藏起來以增加安全性",
      "負載平衡",
      "降低名稱解析所需的時間"
    ],
    "answer": "B",
    "analysis": "為了安全性，通常是將「主要伺服器」隱藏（Hidden Master），僅對次要伺服器同步資料，而由對外公開的「次要伺服器」服務客戶端。"
  },
  {
    "id": "L4030040",
    "question": "主要名稱伺服器將區域檔案內容更新至次要名稱伺服器（Zone Transfer）時，預設使用的通訊協定和埠號為何？",
    "options": [
      "UDP, 53",
      "TCP, 53",
      "UDP, 853",
      "TCP, 853"
    ],
    "answer": "B",
    "analysis": "一般的 DNS 查詢使用 UDP 53，但區域傳輸（Zone Transfer）為了確保資料完整性，必須使用 TCP 53。"
  },
  {
    "id": "L4030041",
    "question": "若一主要名稱伺服器使用BIND 9架設，其允許IP為192.168.1.2的次要伺服器跟它更新區域檔案，下列指令何者正確？",
    "options": [
      "allow-transfer {192.168.1.2;};",
      "allow-update {192.168.1.2;};",
      "allow-download {192.168.1.2;};",
      "allow-sync {192.168.1.2;};"
    ],
    "answer": "A",
    "analysis": "allow-transfer 用於設定哪些主機可以進行區域轉移（同步資料）。allow-update 則是用於動態 DNS 更新。"
  },
  {
    "id": "L4030042",
    "question": "下列哪一項指令可以向IP位址8.8.8.8的名稱伺服器查詢主機example.com的IP位址？",
    "options": [
      "nslookup 8.8.8.8 example.com",
      "nslookup example.com 8.8.8.8",
      "nslookup @8.8.8.8 example.com",
      "nslookup example.com @8.8.8.8"
    ],
    "answer": "B",
    "analysis": "nslookup 的非互動式語法為：nslookup [要查的主機] [使用的伺服器]。"
  },
  {
    "id": "L4030043",
    "question": "下列哪一項指令可以離開nslookup交談模式？",
    "options": [
      "quit",
      "bye",
      "return",
      "exit"
    ],
    "answer": "D",
    "analysis": "在 Linux 系統的 nslookup 交談模式中，必須使用 exit 指令離開。"
  },
  {
    "id": "L4030044",
    "question": "當要寄電子郵件給user@yahoo.com.tw，需要查詢接收者網域的郵件伺服器，下列哪一項指令錯誤？",
    "options": [
      "nslookup -q=mx yahoo.com.tw",
      "nslookup -ty=mx yahoo.com.tw",
      "nslookup -type=mx yahoo.com.tw",
      "nslookup -qt=mx yahoo.com.tw"
    ],
    "answer": "D",
    "analysis": "在 Linux 下，nslookup 不支援 -qt 簡寫，應使用 -q、-type 或 -ty。"
  },
  {
    "id": "L4030045",
    "question": "若希望 nslookup 行為變成詢問2次，每次等待1秒，總共2秒後放棄，下列哪個指令正確？",
    "options": [
      "nslookup -retry=2 -timeout=1 example.com",
      "nslookup -retry=1 -timeout=1 example.com",
      "nslookup -r=2 -t=1 example.com",
      "nslookup -r=1 -t=1 example.com"
    ],
    "answer": "A",
    "analysis": "retry 參數代表嘗試次數（含第一次），timeout 代表每次等待的秒數。"
  },
  {
    "id": "L4030046",
    "question": "指令nslookup所詢問的名稱伺服器若有正常回應，它的傳回值下列哪一項數值正確？",
    "options": [
      "-1",
      "0",
      "1",
      "9"
    ],
    "answer": "B",
    "analysis": "在 Linux 指令慣例中，執行成功且正常回應通常傳回 0，若有錯誤則傳回 1 或其他非 0 數值。"
  },
  {
    "id": "L4030047",
    "question": "若想查詢網域example.com的SPF TXT資源紀錄，下列哪一項指令正確？",
    "options": [
      "nslookup -q=spf example.com",
      "nslookup example.com spf",
      "nslookup -q=txt example.com",
      "nslookup example.com txt"
    ],
    "answer": "C",
    "analysis": "SPF 紀錄是儲存在 TXT 資源紀錄類型中，因此查詢時必須指定類型為 txt。"
  },
  {
    "id": "L4030048",
    "question": "如附圖所示，為一電子郵件的DKIM標頭，若想查詢其寄信網域的DKIM TXT資源紀錄，下列哪一項指令正確？",
    "image": "image/L4030048.PNG",
    "options": [
      "nslookup dk1.nfu.edu.tw dkim",
      "nslookup dk1.nfu.edu.tw txt",
      "nslookup -q=dkim dk1._domainkey.nfu.edu.tw",
      "nslookup -q=txt dk1._domainkey.nfu.edu.tw"
    ],
    "answer": "D",
    "analysis": "DKIM 查詢語法為：nslookup -q=txt <選擇子>._domainkey.<網域>。"
  },
  {
    "id": "L4030049",
    "question": "若想查詢網域example.com的DMARC TXT資源紀錄，下列哪一項指令正確？",
    "options": [
      "nslookup example.com txt",
      "nslookup example.com dmarc",
      "nslookup -q=txt _dmarc.example.com",
      "nslookup -q=dmarc _dmarc.example.com"
    ],
    "answer": "C",
    "analysis": "DMARC 紀錄固定存放在 _dmarc.<domain> 的 TXT 紀錄中。"
  },
  {
    "id": "L4030050",
    "question": "如附圖所示，下列哪一項數值用來讓次要名稱伺服器知道每隔多久的時間，必須向主要名稱伺服器檢查正/反解區域檔是否有更新？",
    "image": "image/L4030050.PNG",
    "options": [
      "12h",
      "15m",
      "3w",
      "2h"
    ],
    "answer": "A",
    "analysis": "SOA 紀錄中的 refresh 欄位（此處為 12h）決定次要伺服器主動檢查更新的週期。"
  },
  {
    "id": "L4040001",
    "question": "設定郵件伺服器的別名，如果要從檔案/var/mail/pilot.aliases讀入用戶的別名列表，應在/etc/aliases檔案中進行下列哪一種記述？",
    "options": [
      "csf: /var/mail/pilot.aliases",
      "csf: CF/var/mail/pilot.aliases",
      "F/var/mail/pilot.aliases",
      "csf: DX/var/mail/pilot.aliases"
    ],
    "answer": "C",
    "analysis": "使用 :include: 路徑可以將外部檔案的內容匯入該別名清單中。"
  },
  {
    "id": "L4040002",
    "question": "關於Sendmail的敘述，下列哪一項錯誤？",
    "options": [
      "當系統安裝完成，Sendmail套件就安裝完成並已啟動Sendmail服務",
      "預設安裝的Sendmail，只有本機可以寄信",
      "預設安裝的Sendmail，可以提供系統寄信給root管理者",
      "安裝好的Sendmail，啟動的port埠號為110"
    ],
    "answer": "D",
    "analysis": "Sendmail 是 SMTP 服務，預設埠號是 25；110 是 POP3 服務使用的埠號。"
  },
  {
    "id": "L4040003",
    "question": "Sendmail Server啟動時，下列哪一項是使用到的主要設定檔？",
    "options": [
      "/etc/mail/sendmail.cf",
      "/etc/mail/sendmail.mc",
      "/etc/mail/access",
      "/etc/mail/submit.cf"
    ],
    "answer": "A",
    "analysis": "sendmail.cf 是伺服器啟動時讀取的最終二進位格式設定檔。sendmail.mc 是給管理員編輯的來源檔。"
  },
  {
    "id": "L4040004",
    "question": "SMTP服務使用下列哪一個TCP/IP埠號？",
    "options": [
      "23",
      "25",
      "110",
      "53"
    ],
    "answer": "B",
    "analysis": "SMTP (Simple Mail Transfer Protocol) 標準埠號為 25。"
  },
  {
    "id": "L4040005",
    "question": "當Mail Relay檔編輯完成時，執行makemap指令，Mail Relay會寫入下列哪一個db檔？",
    "options": [
      "/etc/mail/domaintable.db",
      "/etc/mail/mailertable.db",
      "/etc/mail/virtusertable.db",
      "/etc/mail/access.db"
    ],
    "answer": "D",
    "analysis": "access 檔案經由 makemap 轉換後會生成 access.db，用於控制轉信 (Relay) 權限。"
  },
  {
    "id": "L4040006",
    "question": "編輯Mail Relay檔內容，下列哪一項正確？",
    "options": [
      "61.62.63.64 Relay",
      "Relay 61.62.63.64",
      "61.62.63.64 RELAY",
      "RELAY 61.62.63.64"
    ],
    "answer": "C",
    "analysis": "格式為「標的（IP或網域） [動作]」，動作需大寫，如 RELAY、REJECT。"
  },
  {
    "id": "L4040007",
    "question": "下列哪些Mail Relay檔案的設定，可阻擋badman@baddomain.com的信件？(複選題)",
    "options": [
      "badman@baddomain.com DROP",
      "badman@baddomain.com DISCAR",
      "badman@baddomain.com DENY",
      "badman@baddomain.com REJECT"
    ],
    "answer": "BD",
    "analysis": "DISCARD（丟棄）與 REJECT（拒絕並回報錯誤）是 access 檔中合法的阻擋動作。"
  },
  {
    "id": "L4040008",
    "question": "下列哪一項是Mail Server存放所有User信件的位置？",
    "options": [
      "/bin/mail",
      "/var/spool/mail",
      "/etc/mail",
      "/var/mail"
    ],
    "answer": "B",
    "analysis": "Linux 系統中，使用者收到的信件（尚未被 MUA 取走前）通常存放在 /var/spool/mail/ 檔名為使用者名稱。"
  },
  {
    "id": "L4040009",
    "question": "請問IMAP協定，使用下列哪一種埠號？",
    "options": [
      "25",
      "53",
      "110",
      "143"
    ],
    "answer": "D",
    "analysis": "IMAP (Internet Message Access Protocol) 預設埠號為 143；110 則是 POP3。"
  },
  {
    "id": "L4040010",
    "question": "下列哪一項是查看信件佇列（Mail Queue）的指令？",
    "options": [
      "newmail",
      "mailqueue",
      "mailq",
      "sendmail -q"
    ],
    "answer": "C",
    "analysis": "mailq 指令可以列出目前等待傳送的郵件佇列資訊。"
  },
  {
    "id": "L4040011",
    "question": "關於電子郵件系統三個元件（MUA、MTA及MDA）的敘述，下列哪些正確？(複選題)",
    "options": [
      "微軟的Outlook屬於MUA",
      "MTA是使用者用來讀取信件的軟體",
      "Sendmail是屬於MDA",
      "MDA可以比喻成將信件從郵局送到目的地的員工"
    ],
    "answer": "AD",
    "analysis": "MUA 是用戶端工具；MTA 是負責伺服器間傳輸的代理人（如 Sendmail）；MDA 是負責將郵件分發到使用者信箱的代理人。"
  },
  {
    "id": "L4040012",
    "question": "下列哪一種郵件服務，只管收集郵件但本身不負責散發到網路？",
    "options": [
      "Sendmail",
      "POP3",
      "Inetd",
      "Qmail"
    ],
    "answer": "B",
    "analysis": "POP3 僅負責讓使用者從伺服器端「領取」郵件。"
  },
  {
    "id": "L4040013",
    "question": "在sendmail.mc檔案中，下列哪一行指令必須在最前面？",
    "options": [
      "include('../m4/cf.m4')",
      "#sendmail",
      "#!/bin/sh",
      "OSTYPE(linux)"
    ],
    "answer": "A",
    "analysis": "mc 檔案必須先包含 m4 巨集定義檔才能正確處理後續的指令。"
  },
  {
    "id": "L4040014",
    "question": "關於帳號別名的敘述，下列哪些正確？(複選題)",
    "options": [
      "別名設定檔為/etc/mail/access",
      "一個使用者只能有一個別名",
      "一個別名可以包含多個使用者",
      "讓別名生效的方法是使用newaliases指令"
    ],
    "answer": "CD",
    "analysis": "別名設定檔為 /etc/aliases。一個別名（例如 support）可以同時寄給多個人。修改後須執行 newaliases。"
  },
  {
    "id": "L4040015",
    "question": "在設定Sendmail伺服器時，用不到下列哪一個檔案？",
    "options": [
      "/etc/mail/access",
      "/etc/mail/local-host-names",
      "/etc/mail/sendmail.cf",
      "/etc/mail/hosts"
    ],
    "answer": "D",
    "analysis": "/etc/hosts 是系統主機名稱解析檔，非 Sendmail 專用設定檔。"
  },
  {
    "id": "L4040016",
    "question": "mail logs位在下列哪一個目錄底下？",
    "options": [
      "/log",
      "/logs",
      "/var/adm/syslogs",
      "/var/log"
    ],
    "answer": "D",
    "analysis": "在 Linux 系統中，幾乎所有的服務日誌（包括郵件紀錄 mail.log 或 maillog）都存放在 /var/log 目錄下。"
  },
  {
    "id": "L4040017",
    "question": "郵件系統必須由下列哪些項目組成？(複選題)",
    "options": [
      "MTA",
      "MUA",
      "MDA",
      "MBA"
    ],
    "answer": "ABC",
    "analysis": "一個完整的郵件傳遞流程需要：MUA（使用者端軟體）、MTA（伺服器間傳輸代理）以及 MDA（將信件投遞到信箱的代理）。"
  },
  {
    "id": "L4040018",
    "question": "下列哪一項能正確的描述MTA的功能？",
    "options": [
      "存取儲存的郵件",
      "郵件加密",
      "傳送主機和主機之間的郵件",
      "解決郵件傳輸機制的問題"
    ],
    "answer": "C",
    "analysis": "MTA (Mail Transfer Agent) 的核心任務是利用 SMTP 協定在不同的郵件主機之間進行信件交換與傳送。"
  },
  {
    "id": "L4040019",
    "question": "郵件的傳送路徑通常會由下列哪一種伺服器來決定？",
    "options": [
      "DNS",
      "FTP",
      "HTTP",
      "Sendmail"
    ],
    "answer": "A",
    "analysis": "發信伺服器會向 DNS 查詢目標網域的 MX (Mail Exchanger) 紀錄，來決定信件該往哪台主機傳送。"
  },
  {
    "id": "L4040020",
    "question": "Sendmail帳戶的別名預設記錄在下列哪一個檔案？",
    "options": [
      "/etc/aliases",
      "/etc/mail/access",
      "/etc/passwd",
      "/var/spool/mail"
    ],
    "answer": "A",
    "analysis": "/etc/aliases 是系統預設用來對應使用者別名、群組或轉寄設定的文字檔。"
  },
  {
    "id": "L4040021",
    "question": "在/etc/aliases預設root是下列哪些帳號的別名？(複選題)",
    "options": [
      "bin",
      "daemon",
      "nobody",
      "ftp-adm"
    ],
    "answer": "AB",
    "analysis": "為了管理方便，系統內建的服務帳號如 bin、daemon、adm、mail 等，預設通常會將信件轉發給 root 處理。"
  },
  {
    "id": "L4040022",
    "question": "Mail群組帳號的建立是在下列哪一個檔案？",
    "options": [
      "/etc/aliases",
      "/etc/passwd",
      "/etc/group",
      "/etc/shadow"
    ],
    "answer": "A",
    "analysis": "雖然 /etc/group 是系統群組檔，但若要建立「郵件群組」（一封信同時發給多人），應在 /etc/aliases 中定義。"
  },
  {
    "id": "L4040023",
    "question": "下列哪一個資料夾用於當作Sendmail的佇列存放mail的相關資料？",
    "options": [
      "/var/spool/mqueue",
      "/var/spool/mail",
      "/var/spool/mailq",
      "/var/spool/sendmail"
    ],
    "answer": "A",
    "analysis": "/var/spool/mqueue 是 Sendmail 用來存放等待傳送（暫時無法送達）信件的佇列目錄。"
  },
  {
    "id": "L4040024",
    "question": "下列哪些資訊會在Sendmail佇列中呈現？(複選題)）",
    "options": [
      "收信者（Recipients）",
      "郵件大小（Message Size）",
      "到達時間（Arrival Time）",
      "送信者（Sender）"
    ],
    "answer": "ABCD",
    "analysis": "使用 mailq 指令查看佇列時，會顯示該郵件的 ID、大小、進入時間、寄件者及收件者。"
  },
  {
    "id": "L4040025",
    "question": "關於DNS記錄中的MX記錄，下列敘述哪一項正確？",
    "options": [
      "MX記錄代表Maximum Exchange，用來限制網域的郵件流量",
      "MX記錄是Mail Exemplifier的縮寫，用於標記網域的範例郵件伺服器",
      "MX記錄是Mail Exchange的縮寫，用來指定網域的郵件伺服器",
      "MX記錄代表Mail Explorer，是一個用於搜索郵件的工具"
    ],
    "answer": "C",
    "analysis": "MX (Mail Exchanger) 紀錄告知全世界，發往該網域的郵件應由哪一台伺服器負責接收。"
  },
  {
    "id": "L4040026",
    "question": "下列哪一個指令可以用來查詢DNS的MX記錄？",
    "options": [
      "nslookup",
      "ifconfig",
      "traceroute",
      "ping"
    ],
    "answer": "A",
    "analysis": "nslookup 可以透過設定查詢類型 (type=mx) 來獲取特定網域的郵件伺服器資訊。"
  },
  {
    "id": "L4040027",
    "question": "在Sendmail系統中，欲將寄給admin的信件轉給webadm這個帳號，在別名檔應使用下列哪一項設定？",
    "options": [
      "webadm: admin",
      "root: webadm",
      "admin: root",
      "admin: webadm"
    ],
    "answer": "D",
    "analysis": "別名設定的語法為：[虛擬帳號]: [實際接收帳號]。因此「admin: webadm」代表寄給 admin 的信會送給 webadm。"
  },
  {
    "id": "L4040028",
    "question": "關於Sendmail的rule set替換，下列哪一項程序可以用來進行測試？",
    "options": [
      "sendmail -bd",
      "sendmail -bp",
      "sendmail -bi",
      "sendmail -bt"
    ],
    "answer": "D",
    "analysis": "-bt 選項代表 Address Test Mode，允許管理員測試位址轉換邏輯與規則集（Rule sets）。"
  },
  {
    "id": "L4040029",
    "question": "若想解決Sendmail的過度開放Relay問題，下列哪些方式是可行的？(複選題)",
    "options": [
      "只開放給內部網路，只有在該網路中才可使用SMTP寄信",
      "搭配使用SASL，要通過認證後才能寄信",
      "只開放Relay功能給127.0.0.1",
      "委派專人幫公司所有人寄信"
    ],
    "answer": "AB",
    "analysis": "防止垃圾郵件轉送（Open Relay）的主要方法是限制來源 IP 或要求 SMTP 認證（SASL）。"
  },
  {
    "id": "L4040030",
    "question": "下列哪些檔案可以提供Sendmail運作問題的偵錯線索？(複選題)",
    "options": [
      "/var/log/messages",
      "/var/log/maillog",
      "/var/log/dmesg",
      "/var/log/lastlog"
    ],
    "answer": "AB",
    "analysis": "Sendmail 的錯誤訊息與處理過程主要記錄在 /var/log/maillog；一般系統訊息則記錄在 /var/log/messages。"
  },
  {
    "id": "L4040031",
    "question": "關於Sendmail以standalone模式運作的相關設定，下列哪些正確？(複選題)",
    "options": [
      "使用/etc/hosts.allow和/etc/hosts.deny可以限制SMTP的連線範圍",
      "使用ipchains或iptables可以限制SMTP的連線範圍",
      "必須在/etc/inetd.conf或/etc/xinetd.conf中設定Sendmail",
      "SMTP通常在port 25傾聽等待連線"
    ],
    "answer": "AD",
    "analysis": "Standalone 模式代表程式自行獨立運作。在這種模式下，Sendmail 會直接在 Port 25 監聽，並可透過 TCP Wrappers (/etc/hosts.allow, .deny) 來控制哪些來源 IP 可以連線。"
  },
  {
    "id": "L4040032",
    "question": "關於Mail Server的主動傳送方式，下列哪一項正確？",
    "options": [
      "Sendmail會馬上把郵件放到各個帳號的信箱",
      "Sendmail會在帳號要收信時才把郵件複製到該帳號的信箱",
      "Sendmail會把郵件放到一個公共信箱等各個帳號來收信",
      "Sendmail會馬上把郵件放到各個帳號的家目錄下"
    ],
    "answer": "A",
    "analysis": "Sendmail 在收信後會擔任 MDA 的角色，立即將信件寫入位於 /var/spool/mail/ 下的對應使用者信箱檔案中。"
  },
  {
    "id": "L4040033",
    "question": "若在Sendmail運作時出現錯誤訊息「mail loops back to me (MX problem?)」，這通常代表下列哪一項原因？",
    "options": [
      "郵件地址寫錯",
      "Sendmail程式啟動錯誤",
      "DNS Server上沒有MX設定",
      "NS Server上沒有MX設定"
    ],
    "answer": "D",
    "analysis": "此錯誤通常發生在：DNS 的 MX 紀錄指向了這台伺服器，但這台伺服器卻不認為自己是該網域的最終目的地，導致信件在伺服器間無限循環。"
  },
  {
    "id": "L4040034",
    "question": "為了增加Mail Server的安全性，哪一項建議可以防止不必要的嘗試連線和攻擊？",
    "options": [
      "允許任何IP地址連線",
      "使用弱密碼，以便用戶可以輕鬆記住",
      "使用防火牆來限制未經授權的連線",
      "允許所有用戶訪問伺服器的管理界面"
    ],
    "answer": "C",
    "analysis": "使用防火牆（如 iptables 或 ufw）關閉不必要的通訊埠，並僅允許信任的來源連線，是基礎的安全防護。"
  },
  {
    "id": "L4040035",
    "question": "為何建議定期更新Mail Server的軟體和其組件？",
    "options": [
      "這樣可以使伺服器運行得更快",
      "這樣可以確保新功能的正常運作",
      "這樣可以修復已知的安全漏洞和問題",
      "更新主要是為了改變伺服器的外觀，主要用於離線模式"
    ],
    "answer": "C",
    "analysis": "郵件系統常是駭客攻擊的目標，定期更新軟體能修補已知的 CVE 漏洞，防止伺服器被當作跳板或攻擊對象。"
  },
  {
    "id": "L4040036",
    "question": "關於IMAP的敘述，下列哪些正確？(複選題)",
    "options": [
      "主要用於離線模式",
      "適用於多於一台電腦使用",
      "收信時不需把信件全文下載至電腦",
      "可以於郵件伺服器上建立資料目錄存郵件"
    ],
    "answer": "BCD",
    "analysis": "IMAP 允許信件保留在伺服器上並進行目錄管理，非常適合使用者在多個裝置（手機、筆電）間同步信件狀態。"
  },
  {
    "id": "L4040037",
    "question": "使用下列哪一種技術，可以確保郵件伺服器和客戶端之間的通信是加密的？",
    "options": [
      "FTP",
      "HTTP",
      "SNMP",
      "TLS/SSL"
    ],
    "answer": "D",
    "analysis": "TLS/SSL 用於建立加密通道，保護 SMTP、POP3 或 IMAP 的傳輸內容不被竊聽。"
  },
  {
    "id": "L4040038",
    "question": "在設定Sendmail伺服器時，下列哪個文件是Sendmail主要的組態檔案？",
    "options": [
      "/etc/hosts.allow",
      "/etc/passwd",
      "/etc/mail/sendmail.cf",
      "/var/spool/mail"
    ],
    "answer": "C",
    "analysis": "sendmail.cf 是伺服器運作的核心組態檔。"
  },
  {
    "id": "L4040039",
    "question": "關於Sendmail的說法，下列哪一項正確？",
    "options": [
      "Sendmail是一個郵件用戶代理（MUA）程式",
      "Sendmail是一個郵件傳輸代理（MTA）程式",
      "Sendmail是一個郵件投遞代理（MDA）程式",
      "Sendmail是一個郵件伺服器的圖形使用者介面程式"
    ],
    "answer": "B",
    "analysis": "雖然 Sendmail 內建了部分 MDA 功能，但在定義上它是最經典的 MTA（郵件傳輸代理）。"
  },
  {
    "id": "L4040040",
    "question": "在Sendmail中，下列哪一項用於儲存已送出信件的目錄？",
    "options": [
      "/var/mail",
      "/var/spool/sendmail",
      "/var/spool/mqueue",
      "/var/spool/outgoing"
    ],
    "answer": "C",
    "analysis": "所有「尚未成功送出」或「待處理」的郵件都會暫存在 /var/spool/mqueue 佇列中。"
  },
  {
    "id": "L4040041",
    "question": "若想要設定郵件伺服器的別名，應該在下列哪個檔案進行設置？",
    "options": [
      "/etc/aliases",
      "/etc/mail/access",
      "/etc/mail/sendmail.cf",
      "/var/spool/mail"
    ],
    "answer": "A",
    "analysis": "別名（Aliases）設定於 /etc/aliases 檔案中，修改後需執行 newaliases 指令。"
  },
  {
    "id": "L4040042",
    "question": "POP3和IMAP屬於下列哪一類型的電子郵件服務？",
    "options": [
      "郵件投遞代理（MDA）",
      "郵件傳輸代理（MTA）",
      "郵件用戶代理（MUA）",
      "郵件接收代理（MRA）"
    ],
    "answer": "D",
    "analysis": "MRA (Mail Retrieval Agent) 負責協助用戶從伺服器端將郵件「取回」或「讀取」。"
  },
  {
    "id": "L4040043",
    "question": "下列哪一個郵件協定允許使用者在伺服器上管理郵件，而不需要完全下載？P",
    "options": [
      "SMTP",
      "POP3",
      "IMAP",
      "SNMP"
    ],
    "answer": "C",
    "analysis": "IMAP (Internet Message Access Protocol) 支援伺服器端管理；POP3 則傾向於將信件下載到本地端。"
  },
  {
    "id": "L4040044",
    "question": "在Sendmail中，關於郵件佇列的用途下列哪一項正確？",
    "options": [
      "儲存郵件設定檔",
      "處理郵件的垃圾信件",
      "掃描準備送出的信件",
      "儲存待發送郵件"
    ],
    "answer": "D",
    "analysis": "郵件佇列（Mail Queue）的主要目的就是存放那些因為對方暫時斷線、系統繁忙而等待重新嘗試傳送的信件。"
  },
  {
    "id": "L4040045",
    "question": "若要檢視Sendmail伺服器的郵件佇列中的郵件，應該使用下列哪些指令？(複選題)",
    "options": [
      "mailq",
      "mailqueue",
      "sendmail -q",
      "sendmail -bp"
    ],
    "answer": "AD",
    "analysis": "mailq 與 sendmail -bp (Mail Queue print) 功能相同，皆用於查看佇列清單。"
  },
  {
    "id": "L4040046",
    "question": "若要在Sendmail中設定郵件轉發（Forwarding），應該在下列哪一個檔案進行設定？",
    "options": [
      "/etc/aliases",
      "/etc/mail/access",
      "/etc/mail/sendmail.cf",
      "/var/spool/mail"
    ],
    "answer": "A",
    "analysis": "透過 /etc/aliases 檔案，可以定義郵件地址的別名（Aliases）或將特定地址重新定向（Redirect）至其他地址。修改後須執行 newaliases 指令生效。"
  },
  {
    "id": "L4040047",
    "question": "在郵件伺服器中，下列哪個元件負責將郵件從寄件者的MUA發送至收件者的MUA？",
    "options": [
      "MTA",
      "MDA",
      "MRA",
      "MPA"
    ],
    "answer": "A",
    "analysis": "MTA (Mail Transfer Agent) 負責在伺服器之間路由與發送郵件，是信件傳輸的核心。"
  },
  {
    "id": "L4040048",
    "question": "下列哪個郵件協定是用於網際網路上的郵件路由和交換？",
    "options": [
      "SMTP",
      "POP3",
      "IMAP",
      "HTTP"
    ],
    "answer": "A",
    "analysis": "SMTP (Simple Mail Transfer Protocol) 是網際網路上最標準的郵件傳送與交換協定。"
  },
  {
    "id": "L4040049",
    "question": "若要檢查Sendmail組態檔是否有語法錯誤，您可以使用下列哪個指令進入rule-testing模式？",
    "options": [
      "sendmail -bt",
      "sendmail -C",
      "sendmail -test",
      "sendmail -syntax"
    ],
    "answer": "A",
    "analysis": "sendmail -bt 用於進入位址測試模式（Address Test Mode），可檢查組態檔的規則集語法。"
  },
  {
    "id": "L4040050",
    "question": "Sendmail大量運用m4這個程式來編譯Sendmail的組態檔案，下列哪一項是m4的主要功能？",
    "options": [
      "m4是一個Shell",
      "m4是一個",
      "Compiler",
      "m4是一個Text Editor"
    ],
    "answer": "C",
    "analysis": "m4 是一種巨集處理器（Macro Processor），Sendmail 使用它來將較易讀的 .mc 檔案轉換為複雜的 .cf 設定檔。"
  },
  {
    "id": "L4050001",
    "question": "下列哪一項指令可以安裝Apache網頁伺服器？",
    "options": [
      "sudo apt install apache",
      "sudo apt install apache2",
      "sudo apt install httpd",
      "sudo apt install httpd2"
    ],
    "answer": "B",
    "analysis": "在 Ubuntu (apt) 中，套件名稱為 apache2；在 RedHat/Rocky (dnf) 中則稱為 httpd。"
  },
  {
    "id": "L4050002",
    "question": "Apache網頁伺服器啟動後，正常情況下會開啟下列哪一項埠號提供無加密的網頁流量？",
    "options": [
      "25",
      "53",
      "80",
      "110"
    ],
    "answer": "C",
    "analysis": "HTTP (無加密) 預設使用 Port 80。25 是 SMTP，53 是 DNS，110 是 POP3。"
  },
  {
    "id": "L4050003",
    "question": "以apt剛安裝好的Apache網頁伺服器中，目錄/var/www/html的用途為下列哪一項？",
    "options": [
      "檔案系統中何處是Apache放置網頁文件的根目錄",
      "檔案系統中何處是Apache放置設定檔案的根目錄",
      "檔案系統中何處是Apache放置執行檔案的目錄",
      "檔案系統中何處是Apache放置log檔案的目錄"
    ],
    "answer": "A",
    "analysis": "/var/www/html 是 Apache 預設的「文件根目錄」（Document Root），存放網頁實體檔案。"
  },
  {
    "id": "L4050004",
    "question": "透過apt所安裝的Apache網頁伺服器，其預設的「Document Root」位置為下列哪一項？",
    "options": [
      "/etc/httpd/www",
      "/var/www/html",
      "/usr/local/www",
      "/usr/sbin/httpd"
    ],
    "answer": "B",
    "analysis": "此路徑定義在設定檔 /etc/apache2/sites-enabled/000-default.conf 之中。"
  },
  {
    "id": "L4050005",
    "question": "如果Apache提供的網頁內含中文字，無法正常顯示時，可於charset.conf檔案增加一列「AddDefaultCharset UTF-8」。下列哪一個目錄存放上述檔案？",
    "options": [
      "/etc/httpd/",
      "/etc/httpd/conf",
      "/etc/apache2",
      "/etc/apache2/conf-available"
    ],
    "answer": "D",
    "analysis": "在 Ubuntu 中，全域片段設定存放在 /etc/apache2/conf-available/，啟用後會連結到 conf-enabled。"
  },
  {
    "id": "L4050006",
    "question": "若欲關閉 Apache 的 Directory Listing (目錄列表功能)，下列哪一項修改方式正確？",
    "image": "image/L4050006.PNG",
    "options": [
      "將AllowOverride None改為AllowOverride All",
      "將Require all granted改為Require all denied",
      "將Options Indexes FollowSymLinks改為Options FollowSymLinks",
      "將Options Indexes FollowSymLinks改為Options -Indexes FollowSymLinks"
    ],
    "answer": "C",
    "analysis": "刪除「Indexes」參數可停止目錄列表功能；(D) 選項雖然概念正確，但在該設定列中應改為「-Indexes」方可單獨生效。"
  },
  {
    "id": "L4050007",
    "question": "欲檢查Apache設定檔的語法是否正確，下列哪一項指令正確？",
    "options": [
      "sudo apachectl checkconf",
      "sudo apachectl check",
      "sudo apachectl configtest",
      "sudo apachectl -c"
    ],
    "answer": "C",
    "analysis": "configtest 指令會檢查設定檔語法並回報 Syntax OK。"
  },
  {
    "id": "L4050008",
    "question": "下列哪一項指令可以用來建立 Apache 基本驗證所需的合法使用者帳號與密碼檔？",
    "image": "image/L4050008.PNG",
    "options": [
      "htpasswd",
      "passwd",
      "crypt",
      "auth"
    ],
    "answer": "A",
    "analysis": "htpasswd 是 Apache 專用的工具，用來維護 HTTP 基本認證的使用者檔案。"
  },
  {
    "id": "L4050009",
    "question": "如果只允許帳號Mary可以讀取該目錄資源，而帳號George不可以，應使用下列哪一項設定？",
    "image": "image/L4050009.PNG",
    "options": [
      "Require Mary not George",
      "Require user Mary",
      "Allow Mary not George",
      "Allow user Mary"
    ],
    "answer": "B",
    "analysis": "使用 Require user [名稱] 可以精確指定獲准存取的使用者。"
  },
  {
    "id": "L4050010",
    "question": "關於.htaccess檔案的特性，下列敘述哪一項錯誤？",
    "options": [
      "Apache預設未啟用.htaccess檔案",
      ".htaccess檔案修改後，無須重啟Apache便可生效",
      "可能不需要root權限便可以修改.htaccess檔案",
      "相對於修改Apache的設定檔，使用.htaccess檔案可以讓系統的效能提升"
    ],
    "answer": "D",
    "analysis": "使用 .htaccess 會導致效能「降低」，因為伺服器在每次請求時都必須遞迴搜尋並讀取該檔案。"
  },
  {
    "id": "L4050011",
    "question": "「沒有索引檔案可供服務」的 403 Forbidden 事件會記錄在伺服器的哪一個日誌檔？",
    "options": [
      "/var/log/apache2/error.log",
      "/var/log/apache2/access.log",
      "/var/log/httpd/error_log",
      "/var/log/httpd/access_log"
    ],
    "answer": "A",
    "analysis": "伺服器的存取錯誤、拒絕存取或找不到檔案等「異常」事件都會記錄在 error.log。"
  },
  {
    "id": "L4050012",
    "question": "下列哪一個使用者帳號是當Apache讀取網頁檔案時，預設使用的帳號？",
    "options": [
      "apache",
      "www-data",
      "root",
      "httpd"
    ],
    "answer": "B",
    "analysis": "Ubuntu/Debian 體系的 Apache 預設以 www-data 使用者身分執行。"
  },
  {
    "id": "L4050013",
    "question": "Apache 可以讓使用者在他的家目錄下透過 public_html 目錄放置網頁，是哪個設定檔指定的？",
    "options": [
      "/etc/apache2/apache2.conf",
      "/etc/apache2/sites-enabled/000-default.conf",
      "/etc/apache2/mods-enabled/userdir.conf",
      "/etc/apache2/mods-enabled/dir.conf"
    ],
    "answer": "C",
    "analysis": "UserDir 模組及其設定檔 userdir.conf 定義了個人首頁的目錄名稱。"
  },
  {
    "id": "L4050014",
    "question": "請問下列哪一個目錄放置了預設找尋索引檔順序的 dir.conf 設定檔？",
    "options": [
      "/etc/apache2/mods-available/",
      "/etc/apache2/conf-available/",
      "/etc/apache2/sites-available/",
      "/etc/apache2/"
    ],
    "answer": "A",
    "analysis": "dir.conf 屬於模組（mods）的一部分，存放在 mods-available 目錄中。"
  },
  {
    "id": "L4050015",
    "question": "如欲隱藏 Apache 版本與作業系統資訊，應在 security.conf 中如何設定？",
   "image": "image/L4050015.PNG",
    "options": [
      "server_token off",
      "server_tokens off",
      "ServerSignature Off",
      "ServerSignatures Off"
    ],
    "answer": "C",
    "analysis": "ServerSignature Off 可以關閉錯誤頁面底部的伺服器資訊行；ServerTokens Prod 則可以限制標頭顯示的詳細度。"
  },
  {
    "id": "L4050016",
    "question": "撰寫完虛擬主機設定檔後，應執行哪一個指令使得Apache知道有新增虛擬主機？",
    "options": [
      "sudo a2enhost example.com.conf",
      "sudo a2envhost example.com.conf",
      "sudo a2enweb example.com.conf",
      "sudo a2ensite example.com.conf"
    ],
    "answer": "D",
    "analysis": "a2ensite (Apache2 Enable Site) 用於啟用位於 sites-available 中的設定檔。執行後會在 sites-enabled 建立連結，最後需 reload apache2 服務生效。"
  },
  {
    "id": "L4050017",
    "question": "若想禁用該網站的虛擬主機，應執行哪一個指令？",
    "options": [
      "sudo a2dishost example.com.conf",
      "sudo a2disvhost example.com.conf",
      "sudo a2disweb example.com.conf",
      "sudo a2dissite example.com.conf"
    ],
    "answer": "D",
    "analysis": "a2dissite (Apache2 Disable Site) 用於停用虛擬主機。"
  },
  {
    "id": "L4050018",
    "question": "在 <VirtualHost *:80> 標籤之間可以使用的指令中，下列哪一項錯誤？",
    "options": [
      "ServerName",
      "DocumentRoot",
      "ErrorLog",
      "ocumentRoot"
    ],
    "answer": "D",
    "analysis": "Apache 用於定義自定義日誌的正確指令是「CustomLog」，而非 CustomerLog（多了一個 er）。"
  },
  {
    "id": "L4050019",
    "question": "若想使用 Apache 建立兩部虛擬主機服務兩個網站（www 與 www2），下列敘述何者正確？",
    "options": [
      "兩部虛擬主機可共用同一IP位址和同一port",
      "兩部虛擬主機可共用同一IP位址，但必須使用不同port",
      "兩部虛擬主機可共用同一port，但必須使用不同IP位址",
      "兩部虛擬主機必須使用不同的IP位址和不同port"
    ],
    "answer": "A",
    "analysis": "這稱為「名稱式虛擬主機」（Name-based Virtual Host），Apache 透過 HTTP Header 中的 Host 欄位（域名）來辨認該由哪個主機服務，因此 IP 與 Port 可以相同。"
  },
  {
    "id": "L4050020",
    "question": "Apache 啟用加密傳輸協定 HTTPS 所使用的埠號為何？",
    "options": [
      "22",
      "443",
      "80",
      "143"
    ],
    "answer": "B",
    "analysis": "HTTPS 預設 Port 為 443。22 是 SSH，80 是 HTTP，143 是 IMAP。"
  },
  {
    "id": "L4050021",
    "question": "如果 Apache 想要啟用加密傳輸協定 HTTPS，必須啟用哪個模組？",
    "options": [
      "https",
      "ssl",
      "tls",
      "encryption"
    ],
    "answer": "B",
    "analysis": "必須執行 sudo a2enmod ssl 來啟用 SSL/TLS 支援模組。"
  },
  {
    "id": "L4050022",
    "question": "使用 openssl 指令自建金鑰與憑證時，下列關於 rsa:2048 的敘述何者錯誤？",
    "image": "image/L4050022.PNG",
    "options": [
      "nodes 表示私密金鑰不要用密碼保護",
      "-days 指定憑證有效天數",
      "rsa:2048表示此金鑰長度為2048位元組",
      "執行後會詢問操作者問題並存入憑證"
    ],
    "answer": "C",
    "analysis": "2048 指的是 2048「位元」（Bits），而非位元組（Bytes）。"
  },
  {
    "id": "L4050023",
    "question": "哪一項設定可以將憑證路徑指定給 Apache 的虛擬主機？",
    "options": [
      "SSLCertFile /path/to/crt",
      "SSLCertFiles /path/to/crt",
      "SSLCertificateFile /path/to/crt",
      "SSLCertificateFiles /path/to/crt"
    ],
    "answer": "C",
    "analysis": "正確的指令名稱為 SSLCertificateFile（單數，且全名）。"
  },
  {
    "id": "L4050024",
    "question": "哪一項設定可以將私密金鑰路徑指定給 Apache 虛擬主機？",
    "options": [
      "SSLCertKey /path/to/key",
      "SSLCertKeyFile /path/to/key",
      "SSLCertificateKey /path/to/key",
      "SSLCertificateKeyFile /path/to/key"
    ],
    "answer": "D",
    "analysis": "正確的指令名稱為 SSLCertificateKeyFile。"
  },
  {
    "id": "L4050025",
    "question": "下列哪一項指令可以安裝 Nginx 網頁伺服器？",
    "options": [
      "sudo apt install nginx",
      "sudo apt install nginx2",
      "sudo apt install httpd",
      "sudo apt install httpd2"
    ],
    "answer": "A",
    "analysis": "Nginx 的套件名稱就是小寫的 nginx。"
  },
  {
    "id": "L4050026",
    "question": "Nginx 啟動後，正常情況下開啟哪一項埠號提供無加密網頁流量？",
    "options": [
      "25",
      "53",
      "80",
      "110"
    ],
    "answer": "C",
    "analysis": "與 Apache 相同，標準 HTTP 通訊使用 Port 80。"
  },
  {
    "id": "L4050027",
    "question": "若 Nginx 提供的網頁中文字無法正常顯示，應如何解決？",
    "options": [
      "在server block加上AddDefaultCharset UTF-8;",
      "在server block加上charset UTF-8;",
      "harset UTF-8;",
      "efaultCharset UTF-8;"
    ],
    "answer": "D",
    "analysis": "Nginx 使用的關鍵字是「charset」，且可放置於 http、server 或 location 區塊內。AddDefaultCharset 是 Apache 的語法。"
  },
  {
    "id": "L4050028",
    "question": "欲檢查 Nginx 設定檔語法是否正確，應使用哪一項指令？",
    "options": [
      "nginx -c",
      "sudo nginx -c",
      "nginx -t",
      "sudo nginx -t"
    ],
    "answer": "D",
    "analysis": "nginx -t 用於測試設定檔（Test），由於需讀取系統設定檔，通常需要 sudo 權限。"
  },
  {
    "id": "L4050029",
    "question": "關於 Nginx 的 log_format 使用方式，下列敘述何者正確？",
    "options": [
      "只能寫在http block",
      "只能寫在server block",
      "可寫在http block和server block",
      "可寫在server block和location block"
    ],
    "answer": "A",
    "analysis": "在 Nginx 作為 Web Server 使用時，log_format 指令必須定義在 http 區塊內。"
  },
  {
    "id": "L4050030",
    "question": "Nginx 建立使用者名稱與密碼認證功能時，通常使用哪一項指令建立密碼檔？",
    "image": "image/L4050030.PNG",
    "options": [
      "htpasswd",
      "passwd",
      "crypt",
      "auth"
    ],
    "answer": "A",
    "analysis": "Nginx 兼容 Apache 的密碼檔格式，因此慣例上仍使用 htpasswd 指令（需安裝 apache2-utils 套件）來製作。"
  },
  {
    "id": "L4050031",
    "question": "在 Nginx 設定中，指定 Apache 格式密碼檔案位置的正確指令為何？",
    "options": [
      "auth_file",
      "auth_basic_file",
      "auth_basic_user_file",
      "auth_basic_passwd_file"
    ],
    "answer": "C",
    "analysis": "Nginx 使用 auth_basic_user_file 指令來指定存放帳號密碼的檔案路徑（通常是 .htpasswd）。"
  },
  {
    "id": "L4050032",
    "question": "若要將舊域名「永久」導向到新域名，且保留原始路徑（如 /test.html），該如何設定？",
    "options": [
      "rewrite ^/$ http://www.domain2.com permanent;",
      "rewrite ^/$ http://www.domain2.com permanently;",
      "rewrite ^/(.*)$ http://www.domain2.com/$1 permanent;",
      "rewrite ^/(.*)$ http://www.domain2.com/$1 permanently;"
    ],
    "answer": "C",
    "analysis": "(C) 使用正規表示式 ^/(.*)$ 捕捉所有路徑並用 $1 帶入新網址。permanent 表示回傳 301 永久導向狀態碼。"
  },
  {
    "id": "L4050033",
    "question": "Nginx 讀取網頁檔案或目錄時，預設使用的使用者帳號為何？",
    "options": [
      "apache",
      "www-data",
      "root",
      "httpd"
    ],
    "answer": "B",
    "analysis": "在 Ubuntu/Debian 系統中，Nginx 與 Apache 相同，預設使用 www-data 帳號執行。"
  },
  {
    "id": "L4050034",
    "question": "當網址以「/」結尾時，Nginx 用來指定預設找尋索引檔案順序的指令為何？",
    "options": [
      "Directory_Index",
      "DirectoryIndex",
      "index",
      "Index"
    ],
    "answer": "C",
    "analysis": "Nginx 的指令是全小寫的「index」。(B) DirectoryIndex 是 Apache 的指令。"
  },
  {
    "id": "L4050035",
    "question": "如欲隱藏 Nginx 的版本號與作業系統資訊，應在 nginx.conf 如何設定？",
    "image": "image/L4050035.PNG",
    "options": [
      "server_token off;",
      "server_tokens off;",
      "ServerSignature Off;",
      "ServerSignatures Off;"
    ],
    "answer": "B",
    "analysis": "正確指令為 server_tokens off;（注意有 s 且全小寫）。"
  },
  {
    "id": "L4050036",
    "question": "Nginx 預設會針對哪種檔案類型進行 gzip 壓縮以節省流量？",
    "options": [
      ".jpg",
      ".css",
      ".js",
      ".html"
    ],
    "answer": "D",
    "analysis": "Nginx 預設僅啟用 text/html 的壓縮。其他類型如 css、js 需透過 gzip_types 手動增加。"
  },
  {
    "id": "L4050037",
    "question": "若要防止 Nginx 的基本認證被暴力破解，Fail2Ban 應啟動哪一個監獄 (Jail)？",
    "options": [
      "[nginx-limit-req]",
      "[nginx-http-auth]",
      "[nginx-botsearch]",
      "[lighttpd-auth]"
    ],
    "answer": "B",
    "analysis": "[nginx-http-auth] 專門監控 Nginx 的認證失敗紀錄並封鎖惡意 IP。"
  },
  {
    "id": "L4050038",
    "question": "Nginx 預設用來服務即時訊息協定 (RTMP) 串流的埠號 (Port) 為何？",
    "options": [
      "80",
      "443",
      "554",
      "1935"
    ],
    "answer": "D",
    "analysis": "RTMP 預設通訊埠為 1935。"
  },
  {
    "id": "L4050039",
    "question": "哪一個套件可使 Nginx 支援 RTMP 串流功能？",
    "options": [
      "rtmp",
      "nginx-rtmp",
      "nginx-mod-rtmp",
      "libnginx-mod-rtmp"
    ],
    "answer": "D",
    "analysis": "在 Ubuntu 中，需安裝 libnginx-mod-rtmp 套件來擴充功能。"
  },
  {
    "id": "L4050040",
    "question": "Nginx RTMP 設定中，若僅允許本機 (127.0.0.1) 發布串流，下列何者正確？",
    "options": [
      "publish deny all except 127.0.0.1;",
      "publish allow 127.0.0.1 deny all;",
      "allow publish 127.0.0.1; deny publish all;",
      "allow 127.0.0.1 deny all;"
    ],
    "answer": "C",
    "analysis": "在 RTMP 區塊中，權限控制語法為「allow/deny [動作] [對象]」。"
  },
  {
    "id": "L4050041",
    "question": "若要將網站「暫時」導向到另一域名，且保留原始路徑，正確設定為何？",
    "options": [
      "rewrite ^/$ http://www.domain2.com redirect;",
      "rewrite ^/$ http://www.domain2.com/$1 redirect;",
      "rewrite ^/(.*)$ http://www.domain2.com/$1 redirect;",
      "rewrite ^/(.*)$ http://www.domain2.com/ redirect;"
    ],
    "answer": "C",
    "analysis": "redirect 代表回傳 302 暫時導向。^/(.*)$ 確保整個路徑都被帶往新站台。"
  },
  {
    "id": "L4050042",
    "question": "在 /etc/nginx/ 目錄下，如何正確連結 sites-available 的設定檔到 sites-enabled？",
    "options": [
      "sudo ln -s sites-enabled/ sites-available/example.com",
      "sudo ln -s sites-available/example.com sites-enabled/",
      "sudo ln -s /etc/nginx/sites-enabled/ /etc/nginx/sites-available/example.com",
      "sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/"
    ],
    "answer": "D",
    "analysis": "ln -s 的語法是「來源（實體檔案） 目的地（連結點）」。使用絕對路徑 (D) 最不容易出錯。"
  },
  {
    "id": "L4050043",
    "question": "關於 Nginx server block 裡的 listen 指令，下列敘述何者錯誤？",
    "options": [
      "可以接 IP 和 Port 的組合",
      "可以只接 IP，不接 Port",
      "可以只接 Port，不接 IP",
      "不可以同時沒有 IP 和 Port"
    ],
    "answer": "D",
    "analysis": "即使不寫 IP 與 Port，Nginx 也會自動補上預設值 0.0.0.0:80，所以 (D) 錯誤。"
  },
  {
    "id": "L4050044",
    "question": "Nginx 比對 server_name 的優先順序為何？",
    "options": [
      "完全、領先的通配符、尾隨的通配符、正規表示式、預設",
      "完全、尾隨的通配符、領先的通配符、正規表示式、預設",
      "完全、正規表示式、領先的通配符、尾隨的通配符、預設",
      "完全、正規表示式、尾隨的通配符、領先的通配符、預設"
    ],
    "answer": "A",
    "analysis": "比對順序為：Exact name -> Longest leading wildcard (如 *.example.com) -> Longest trailing wildcard (如 mail.*) -> Regular expressions -> Default。"
  },
  {
    "id": "L4050045",
    "question": "關於「自簽憑證」與「CA 簽署憑證」的敘述，下列何者正確？",
    "options": [
      "自己簽署的SSL憑證無法用來加密網頁流量，而CA簽署的SSL憑證可以",
      "自己簽署的SSL憑證無法讓網頁瀏覽器自動驗明網頁伺服器的身分，而CA簽署的SSL憑證可以",
      "自己簽署的SSL憑證無法用來驗證網頁瀏覽器的身分，而CA簽署的SSL憑證可以",
      "為了商業利益，CA簽署的SSL憑證效期最久是一年，自己簽署的SSL憑證則可以將效期設為任意久"
    ],
    "answer": "B",
    "analysis": "兩者皆可加密。但自簽憑證不會被瀏覽器信任（會顯示警告），因為沒有受信任的第三方 (CA) 擔保身分。"
  },
  {
    "id": "L4050046",
    "question": "如附圖所示，是Nginx裡兩個server block的主要設定，且example.com解析後的IP位址是192.168.1.10，當一個網頁瀏覽器請求瀏覽example.com時，附圖裡會服務該請求的server block，下列敘述哪一項正確？",
    "image": "image/L4050046.PNG",
    "options": [
      "附圖上方的server block",
      "附圖下方的server block",
      "附圖兩個server block都會服務該請求",
      "附圖兩個server block都不會服務該請求"
    ],
    "answer": "A",
    "analysis": "在此題，兩個server block都是在port 80提供服務，網頁瀏覽器預設也是請求port 80。Nginx找尋server block的流程：先找尋listen的IP位址完全符合請求的IP位址，若僅有一個server block符合，即便它的server_name沒有寫或是不符合請求的網域名稱（也可稱為主機名稱），此server block會被挑選來服務該請求，所以此題便是附圖上方的server block被挑選出來服務請求，至此停止找尋。"
  },
  {
    "id": "L4050047",
    "question": "下列哪一項設定可以將https所需之憑證（/etc/ssl/certs/nginx-selfsigned.crt）指定給Nginx的server block？",
    "options": [
      "ssl_certificate_file /etc/ssl/certs/nginx-selfsigned.crt;　#指定憑證",
      "ssl_certificate_files /etc/ssl/certs/nginx-selfsigned.crt;　#指定憑證",
      "ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;　#指定憑證",
      "ssl_certificates /etc/ssl/certs/nginx-selfsigned.crt;　#指定憑證"
    ],
    "answer": "C",
    "analysis": "(A)(B)(D)皆語法錯誤。"
  },
  {
    "id": "L4050048",
    "question": "如附圖所示，是Apache記錄錯誤事件的日誌檔之一部分內容，Apache的管理員已經執行過指令sudoa2enmod userdir並重新啟動Apache，且使用者user也在他的家目錄下創立了public_html目錄，並在public_html目錄下建立了一個index.html檔案。假設使用者user無權使用指令sudo，請問下列哪一項指令可以被使用者user用來解決該錯誤事件？",
    "image": "image/L4050048.PNG",
    "options": [
      "chmod o+x ~",
      "chmod o+r ~",
      "chmod o+x ~/public_html",
      "chmod o+r ~/public_html"
    ],
    "answer": "A",
    "analysis": "(A)在Ubuntu 22.04 LTS，家目錄的權限預設是750。Apache不該用root身分運行，也不會用user身分運行，由於/home/user/目錄的角色o少了x權限，所以Apache無法讀取其下的public_html目錄。"
  },
  {
    "id": "L4050049",
    "question": "下列哪一項設定可以讓Nginx使用TLS 1.3來保護網頁流量？",
    "options": [
      "ssl_protocols TLSv1.3;　#使用TLS 1.3",
      "ssl_protocol TLSv1.3;　#使用TLS 1.3",
      "tls_protocols TLSv1.3;　#使用TLS 1.3",
      "tls_protocol TLSv1.3;　#使用TLS 1.3"
    ],
    "answer": "A",
    "analysis": "(B)(C)(D)皆語法錯誤。"
  },
  {
    "id": "L4050050",
    "question": "在Apache中，若有一網站因故（如：維護網頁）暫時無法服務，想將收到的網頁請求「暫時」導向到同一 Apache所管理的另一網站www.domain2.com，下列哪一項設定不是原網站的設定檔該採用的？",
    "options": [
      "Redirect / http://www.domain2.com",
      "Redirect temporarily / http://www.domain2.com",
      "Redirect temp / http://www.domain2.com",
      "Redirect 302 / http://www.domain2.com"
    ],
    "answer": "B",
    "analysis": "(B)語法錯誤。"
  },
  {
    "id": "L4060001",
    "question": "關於Proxy Server的敘述，下列哪些正確？(複選題)",
    "options": [
      "Squid是Linux上常見的Proxy Server套件",
      "Proxy用戶端TCP/IP設定必須指定Proxy Server IP方可使用",
      "P/IP設定必須指定Proxy Server IP方可使用",
      "Proxy用戶端只需指定瀏覽器上的Proxy Server即可使用"
    ],
    "answer": "AD",
    "analysis": "Squid套件為大多數Linux上常見的Proxy Server套件。Client端只要在瀏覽器上設定好Proxy Server，即可利用。"
  },
  {
    "id": "L4060002",
    "question": "關於Proxy Server的敘述，下列哪一項錯誤？",
    "options": [
      "架設Proxy Server可以減少網路瀏覽所佔用的頻寬",
      "Proxy Server亦稱為「代理伺服器」",
      "Linux上的Proxy名為ISA Server",
      "Proxy Server放至閘道器上亦有防火牆功能"
    ],
    "answer": "C",
    "analysis": "ISA Server是微軟Windows Server的軟體。"
  },
  {
    "id": "L4060003",
    "question": "下列哪一項是Squid服務的預設連線埠號？",
    "options": [
      "3128",
      "8080",
      "443",
      "80"
    ],
    "answer": "A",
    "analysis": "Squid服務啟動後，預設會開啟3128連線埠號。"
  },
  {
    "id": "L4060004",
    "question": "下列哪一項是Squid服務的預設檔案快取放置目錄？",
    "options": [
      "/var/spool/proxy",
      "/var/spool/squid",
      "/etc/squid/",
      "/var/lib/proxy"
    ],
    "answer": "B",
    "analysis": "Squid服務預設的檔案快取目錄為/var/spool/squid。"
  },
  {
    "id": "L4060005",
    "question": "Squid的設定檔位在下列哪一項位置？",
    "options": [
      "/var/proxy/squid.conf",
      "/var/spool/squid.conf",
      "/etc/squid/squid.conf",
      "/etc/proxy/squid.conf"
    ],
    "answer": "C",
    "analysis": "Squid服務的設定檔位置為/etc/squid/squid.conf。"
  },
  {
    "id": "L4060006",
    "question": "在Squid設定檔內，如果允許內部網路10.0.0.0/8網段使用HTTP代理服務，請問下列哪些設定項目正確？(複選題)",
    "options": [
      "acl localnet dst 10.0.0.0/8",
      "acl my_localnet src 10.0.0.0/8",
      "http_access allow my_localnet",
      "http_access allow localnet"
    ],
    "answer": "BC",
    "analysis": "Squid服務的設定檔/etc/squid/squid.conf內部，需要設定兩個項目，一是定義存取的來源，二是定義允許代理服務。"
  },
  {
    "id": "L4060007",
    "question": "在Linux中，下列哪一項是預載的防火牆核心模組？",
    "options": [
      "netfilters",
      "nftables",
      "iptables",
      "firewalld"
    ],
    "answer": "A",
    "analysis": "Linux中，針對防火牆所預載的核心模組為netfilter，其餘答案均為netfilter的前端框架。"
  },
  {
    "id": "L4060008",
    "question": "在Ubuntu Linux中，預載使用ufw服務作為防火牆設定工具。請問下列哪一個ufw指令可查詢防火牆目前的狀況？",
    "options": [
      "systemctl status ufw",
      "show ufw status",
      "show firewall status",
      "ufw status"
    ],
    "answer": "D",
    "analysis": "顯示目前防火牆的狀態，可使用答案D。A的答案是查詢ufw服務的運行狀態。"
  },
  {
    "id": "L4060009",
    "question": "使用ufw防火牆工具時，下列哪一個指令可以啟動防火牆？",
    "options": [
      "ufw start",
      "ufw enable",
      "ufw disable",
      "ufw run"
    ],
    "answer": "B",
    "analysis": "ufw啟動防火牆的方式為ufw enable。"
  },
  {
    "id": "L4060010",
    "question": "下列哪一個ufw指令允許ssh連線至本機？",
    "options": [
      "ufw allow ssh",
      "ufw accept ssh",
      "ufw agree ssh from 0.0.0.0/0",
      "ufw ssh allow from 0.0.0.0/0"
    ],
    "answer": "A",
    "analysis": "ufw如允許特定的連線至本機時，可使用allow作為輔助指令選項。"
  },
  {
    "id": "L4060011",
    "question": "小明開發了一支網路程式，需要利用TCP協定的2049這個連線埠對外進行連網作業，請問他應該如何利用ufw指令調整防火牆設定？",
    "options": [
      "ufw allow tcp 2049",
      "ufw allow tcp from 2049",
      "ufw 2049/tcp allow",
      "ufw allow 2049/tcp"
    ],
    "answer": "D",
    "analysis": "ufw允許特定的連線埠連線，可使用allow作為輔助指令選項。"
  },
  {
    "id": "L4060012",
    "question": "小明測試完網路程式之後，想要刪除防火牆TCP 2049連線埠規則，請問他要如何下達ufw指令，調整防火牆設定？",
    "options": [
      "ufw delete 2049/tcp",
      "ufw delete allow 2049/tcp",
      "ufw stop 2049/tcp",
      "ufw delete tcp 2049"
    ],
    "answer": "B",
    "analysis": "ufw若要刪除已允許的連線埠規則，可使用delete作為輔助指令選項，並配合先前允許的allow選項關鍵字。"
  },
  {
    "id": "L4060013",
    "question": "小花開發好的程式連線埠為TCP 80埠，如果想在防火牆規則上，指定為第一個被允許的規則，請問要如何使用ufw設定？",
    "options": [
      "ufw allow 80/tcp rule 1",
      "ufw rules 1 allow 80/tcp",
      "ufw insert 1 allow 80/tcp",
      "ufw replace 1 allow 80/tcp"
    ],
    "answer": "C",
    "analysis": "ufw若要在原來的防火牆規則上，插入特定的規則，可利用指定規則編號的方式進行，其輔助指令選項關鍵字為insert。"
  },
  {
    "id": "L4060014",
    "question": "小揚的公司內部有一Linux防火牆，分別連接192.168.0.0/24以及172.16.1.0/24兩個網段以及連至DMZ的網路。小揚需要允許192.168.0.0/24網段的電腦連線至DMZ上的Samba Server，請問他該如何使用ufw指令調整防火牆？",
    "options": [
      "ufw allow from 192.168.0.0/24 to DMZ",
      "ufw allow from 172.16.1.0/24",
      "ufw allow app Samba to 192.168.0.0/24",
      "ufw allow from 192.168.0.0/24 to any app Samba"
    ],
    "answer": "D",
    "analysis": "ufw指令可配合app與from兩項輔助選項，指定可連線通過的網段，連至網路上的應用程式伺服器。"
  },
  {
    "id": "L4060015",
    "question": "小花在公司內利用Ubuntu Linux架了一部防火牆，並且打算利用ufw工具來開啟SNAT的功能。請問，她首先應要設定/etc/default/ufw檔案內的哪一個參數？",
    "options": [
      "SNAT_FORWARD=\"SNAT\"",
      "DEFAULT_FORWARD_POLICY=\"ACCEPT\"",
      "DEFAULT_FORWARD_POLICY=\"TRUE\"",
      "DEFAULT_FORWARD_POLICY=\"YES\""
    ],
    "answer": "B",
    "analysis": "SNAT的功能開啟，首先需要將/etc/default/ufw檔案內加上DEFAULT_FORWARD_POLICY=\"ACCEPT\"設定參數值。"
  },
  {
    "id": "L4060016",
    "question": "小明利用公司內的Ubuntu Linux架了一部防火牆，並且肩負SNAT的功能。請問，他在開通SNAT防火牆之前，需要設定/etc/ufw/sysctl.conf中的哪一項參數？",
    "options": [
      "net.ipv4.ip_forward=1",
      "net.ip.forward=1",
      "net/ipv4/ip_forward=1",
      "net/ip/forward=1"
    ],
    "answer": "C",
    "analysis": "Ubuntu Linux中，設定Kernal中的IP Forward功能參數以利SNAT作用時，需修改/etc/ufw/sysctl.conf內的設定。"
  },
  {
    "id": "L4060017",
    "question": "小花是公司Ubuntu Linux的管理者。她現在需要開啟Linux上的防火牆記錄，以利將來的分析。請問她該下達哪一個指令？",
    "options": [
      "ufw logging on",
      "ufw start logging",
      "ufw logs files",
      "ufw files logging"
    ],
    "answer": "A",
    "analysis": "開啟ufw功能內的logging輔助指令選項，可記錄通過防火牆的流量相關記錄。"
  },
  {
    "id": "L4060018",
    "question": "小明是公司的Ubuntu Linux管理員。他現在想要在Ubuntu Linux上安裝SELinux以強化系統安全，請問他可以安裝下列哪些套件？(複選題)",
    "options": [
      "selinux",
      "policycoreutils",
      "selinux-utils",
      "selinux-basics"
    ],
    "answer": "BCD",
    "analysis": "欲使用Ubuntu Linux上的SELinux功能，可安裝policycoreutils、selinux-utils、selinux-basics等套件，但沒有selinux這個套件。"
  },
  {
    "id": "L4060019",
    "question": "小花是公司的Ubuntu Linux系統管理員，她現在想要啟動已安裝完成的SELinux安全功能，請問她應該要執行下列哪一個指令？",
    "options": [
      "selinux-activate ; reboot",
      "selinux enabled",
      "selinux ; reboot",
      "selinux start ; reboot"
    ],
    "answer": "A",
    "analysis": "剛安裝完成的SELinux安全功能，在設定好啟動功能之後，需要重新開機，才能完全啟動。"
  },
  {
    "id": "L4060020",
    "question": "小明現在正在調整SELinux安全功能的運作模式。他需要將SELinux安全功能調至Enforcing模式，請問他可在下列哪一個檔案內設定？",
    "options": [
      "/etc/selinux.conf",
      "/etc/selinux/config",
      "/var/selinux/config",
      "/var/selinux.conf"
    ],
    "answer": "B",
    "analysis": "SELinux運作模式的設定檔為/etc/selinux/config。"
  },
  {
    "id": "L4060021",
    "question": "小明在操作公司的Ubuntu Linux server時，發現SELinux安全功能的運作模組處於Permissive狀態。他現在想要立即切換至Enforcing狀態，請問他該下達哪一個指令來達成目的？",
    "options": [
      "selinux-config-enforcing",
      "set selinux enforcing",
      "selinux 1",
      "setenforce 1"
    ],
    "answer": "D",
    "analysis": "立即切換SELinux安全功能的模組，可以使用setenforce指令來進行。"
  },
  {
    "id": "L4060022",
    "question": "小花現在正在替公司的Ubuntu Linux進行SELinux安全模組設定。她應該利用下列哪一個指令查看SELinux所有的布林值？",
    "options": [
      "getsebool -a",
      "getseboolen -a",
      "getsebool --list-all",
      "getseboolen --list-all"
    ],
    "answer": "A",
    "analysis": "查看SELinux布林值的指令為getsebool。"
  },
  {
    "id": "L4060023",
    "question": "小明現在正在替公司的Ubuntu Linux進行SELinux安全模組設定。他希望公司的網站網頁可以直接連結至資料庫，請問他應該要開放下列哪一個布林值？",
    "options": [
      "httpd_can_connect_database",
      "httpd_can_network_connect_db",
      "httpd_can_network_connect",
      "httpd_can_connect_to_mysql"
    ],
    "answer": "B",
    "analysis": "SELinux布林值的項目中，httpd_can_network_connect_db可允許httpd連結至資料庫。"
  },
  {
    "id": "L4060024",
    "question": "小花現在正在替公司的Ubuntu Linux進行SELinux安全模組設定。她想讓公司的NFS Server可以上下傳檔案，請問她應該要開放下列哪一個布林值？",
    "options": [
      "nfs_can_upload",
      "nfs_allow_all_rw",
      "nfs_export_all_rw",
      "nfs_allow_read_write"
    ],
    "answer": "C",
    "analysis": "SELinux布林值的項目中，nfs_export_all_rw可允許httpd連結至資料庫。"
  },
  {
    "id": "L4060025",
    "question": "小林現在正在替公司的Ubuntu Linux進行SELinux安全模組設定。他正在設定Samba Server可以永久允許建立家目錄，請問她應該執行下列哪一個指令？",
    "options": [
      "setsebool samba_create_home_dirs",
      "setsebool samba_create_home_dirs on",
      "setsebool -A samba_create_home_dirs on",
      "setsebool -P samba_create_home_dirs on"
    ],
    "answer": "D",
    "analysis": "SELinux布林值的設定指令setsebool可配合-P選項，進行永久布林值設定。"
  },
  {
    "id": "L4060026",
    "question": "小明正在替公司的Ubuntu Linux查詢SELinux布林值的設定。他想要查看跟公司網站網頁有關的所有布林值設定情況，請問他可以執行下列哪些指令？(複選題)",
    "options": [
      "semanage boolean",
      "semanage",
      "getsebool",
      "getseboolean"
    ],
    "answer": "AC",
    "analysis": "查詢SELinux布林值設定情況，可以利用getsebool與semanage boolean指令。"
  },
  {
    "id": "L4060027",
    "question": "小明接受到指令，要求在Ubuntu Linux Server上建立一個網頁用目錄/helloworld來放置公司的網站。請問他應該要指定這個目錄的SELinux脈胳規則（Context）為下列哪一種類型屬性？",
    "options": [
      "httpd_sys_rw_content_t",
      "httpd_sys_content_t",
      "httpd_sys_ro_content_t",
      "httpd_content_t"
    ],
    "answer": "B",
    "analysis": "提供給httpd服務可瀏覽的檔案脈絡規則為httpd_sys_content_t。"
  },
  {
    "id": "L4060028",
    "question": "小花接到MIS部門的求救電話，MIS表示他們將網站的連線埠改至8191埠，防火牆也配合設定更改埠號，但無法啟動服務，原因是8191埠出現「Permission Denied」字樣。請問，小花可用下列哪一個指令進行處理？",
    "options": [
      "semanage port -a http_sys_port_t -p 8191",
      "semanage boolean -a http_port_t 8191",
      "semanage fcontext -a -t http_sys_port_t -p 8191",
      "semanage port -a -t http_port_t -p tcp 8191"
    ],
    "answer": "D",
    "analysis": "httpd服務通訊埠需要使用http_port_t類型的SELinux屬性值。"
  },
  {
    "id": "L4060029",
    "question": "小明將網頁設計師的作品放置於/var/www/html目錄下，並且設置檔案權限模組為0644，但仍發現瀏覽器無法觀看該網頁作品，網頁上出現「Forbidden」字樣，於是他想要將目錄回歸其SELinux預設的脈絡規則設定值，請問他該如何處理較為恰當？",
    "options": [
      "restorecon -Rvv /var/www/html",
      "chmod -R 777 /var/www/html",
      "chown root:root /var/www/html",
      "usermod -aG apache apache"
    ],
    "answer": "A",
    "analysis": "使用restorecon可以將目錄回歸其SELinux預設的脈胳規則設定值。"
  },
  {
    "id": "L4060030",
    "question": "小花將網頁設計師給的網頁檔案，放置於/var/www/html目錄內。她不確定這些檔案、目錄的SELinux脈絡規則是否正確，她可以利用下列哪一個指令進行確認？",
    "options": [
      "semanage fcontext -l",
      "ls -Zal *",
      "getenforce",
      "getsebool -a"
    ],
    "answer": "B",
    "analysis": "使用ls -Z指令即可查看檔案的脈絡規則屬性值。"
  },
  {
    "id": "L4060031",
    "question": "小明將Ubuntu Linux上的SELinux運行模式切成Enforcing，在重新開機後發現了不少問題。請問，他可以安裝哪一個服務，以利除錯的進行？",
    "options": [
      "selinux",
      "setroubleshooting",
      "auditd",
      "selogd"
    ],
    "answer": "C",
    "analysis": "auditd服務可以將系統錯誤記錄起來方便進行除錯。"
  },
  {
    "id": "L4060032",
    "question": "小花現在正在設定Ubuntu Linux上的網頁檔案，但該檔案只是暫時放置的檔案，小花可以利用下列哪一個指令，進行臨時的SELinux檔案的脈絡規則設定？",
    "options": [
      "semanage fcontext",
      "restorecon",
      "audit2allow",
      "chcon"
    ],
    "answer": "D",
    "analysis": "使用chcon可臨時修改SELinux的檔案脈絡規則屬性。"
  },
  {
    "id": "L4060033",
    "question": "小明在Ubuntu Linux上設定SELinux功能，他發現他需要允許httpd服務去寫入var_t類型的檔案，請問他可以利用下列哪些指令完成這項工作？(複選題)",
    "options": [
      "semanage boolean",
      "audit2allow",
      "restorecon",
      "semodule"
    ],
    "answer": "BD",
    "analysis": "利用audit2allow以及semodule兩個指令，可以特許某些程序存取不同脈絡規則的檔案。"
  },
  {
    "id": "L4060034",
    "question": "一般在Ubuntu Linux Server上架設VPN服務時，都是安裝OpenVPN套件。請問該套件是使用哪一種VPN堆疊加密方式？",
    "options": [
      "CHAP",
      "IPSec",
      "HAP",
      "PPTP"
    ],
    "answer": "C",
    "analysis": "Ubuntu Linux上使用OpenVPN套件架設VPN服務時，使用SSL/TLS堆疊的加密技術。"
  },
  {
    "id": "L4060035",
    "question": "小林想要替公司架設一個VPN Server，請問他需要告知MIS開啟防火牆上的哪兩個通訊埠？(複選題)",
    "options": [
      "1194/udp",
      "1194/tcp",
      "1190/udp",
      "1190/tcp"
    ],
    "answer": "AB",
    "analysis": "VPN的通訊埠使用1194，可以是TCP或UDP協定。"
  },
  {
    "id": "L4060036",
    "question": "在Ubuntu Linux Server上架設VPN服務，通常會安裝openvpn以及easy-rsa兩套軟體。請問下列哪一項不是使用easy-rsa軟體的目的？",
    "options": [
      "產生兩把key來協助VPN通訊內容的加解密",
      "利用產生的key進行登入的身份驗證",
      "製作授權驗證機制，進行Server與Client的電子簽章",
      "利用key來啟動VPN服務"
    ],
    "answer": "D",
    "analysis": "easy-key可以產生RSA公私金鑰對以及CA電子簽章憑證的金鑰。"
  },
  {
    "id": "L4060037",
    "question": "小花利用公司的Ubuntu Linux Server架設VPN服務，她寫好設定檔server1.conf之後，放置於/etc/openvpn目錄之下。請問她該如何啟動VPN服務？",
    "options": [
      "systemctl start openvpn@server1",
      "systemctl start openvpn",
      "openvpn connect",
      "openvpn start connect"
    ],
    "answer": "A",
    "analysis": "啟動VPN服務時，利用systemctl指令啟動openvpn@[設定檔]的方式即可。"
  },
  {
    "id": "L4060038",
    "question": "小花在完成VPN服務的設定檔server1.conf之後，啟動VPN服務失敗。請問，她可以利用下列哪一個指令進行除錯？",
    "options": [
      "systemctl status openvpn",
      "journalctl -u openvpn@server1 -xe",
      "journalctl -xe openvpn",
      "less /var/log/messages"
    ],
    "answer": "B",
    "analysis": "利用journalctl可以取得某特定服務的運行日誌，進行VPN服務的除錯，但服務名稱需要加上設定檔名。"
  },
  {
    "id": "L4060039",
    "question": "小明想要替公司的Ubuntu Linux Server架設LDAP服務，請問他需要安裝下列哪一個套件以達成目標？",
    "options": [
      "openLDAP",
      "ldapd",
      "slapd",
      "Account"
    ],
    "answer": "C",
    "analysis": "Ubuntu Linux上可以利用slapd套件來提供LDAP服務。OpenLDAP是整體軟體名稱，但不是用來安裝服務用的實際名稱。"
  },
  {
    "id": "L4060040",
    "question": "小花的公司申請到了網域名稱為example.com。小花想將名稱結合LDAP的服務，以利公司的帳號管理。請問小花應將LDAP網域元件設定成下列哪一個項目？",
    "options": [
      "dn=example,dn=com",
      "ou=example,ou=com",
      "cn=example,cn=com",
      "dc=example,dc=com"
    ],
    "answer": "D",
    "analysis": "LDAP的網域元件為DC。"
  },
  {
    "id": "L4060041",
    "question": "小明將要設定公司Ubuntu Linux Server上的LDAP服務，請問他在LDAP設定檔ldap.conf檔案內，至少應設定下列哪些項目內容？(複選題)",
    "options": [
      "BASE",
      "URI",
      "SIZE",
      "TIME"
    ],
    "answer": "AB",
    "analysis": "在LDAP設定檔ldap.conf檔案內，至少要定義BASE與URI兩個參數項目。"
  },
  {
    "id": "L4060042",
    "question": "小花想要連結公司Ubuntu Linux Server上的LDAP服務，並且進行帳號資料的查詢，請問她可以執行下列哪一個指令？",
    "options": [
      "ldapquery",
      "ldapadmin",
      "ldapsearch",
      "ldaplink"
    ],
    "answer": "C",
    "analysis": "ldapsearch開啟與LDAP伺服器的連線，連結並使用過濾器filter來執行搜尋。"
  },
  {
    "id": "L4060043",
    "question": "小花想要替新進公司的員工新增帳號至公司的Ubuntu Linux Server上LDAP服務，請問她應該要編寫哪一種類型的檔案？",
    "options": [
      "Config file",
      "LDAP file",
      "Word file",
      "LDIF file"
    ],
    "answer": "D",
    "analysis": "LDIF檔案用於在LDAP服務上，新增、修改使用者資料。"
  },
  {
    "id": "L4060044",
    "question": "小花在設定完新進員工在LDAP Server上的帳號後，發現她將密碼設定錯誤，請問她可以利用下列哪一個指令進行密碼修改？",
    "options": [
      "passwd",
      "ldappasswd",
      "ldappassword",
      "ldapwd"
    ],
    "answer": "B",
    "analysis": "LDAP服務上如需要修改密碼，可以使用ldappasswd指令進行修改。"
  },
  {
    "id": "L4060045",
    "question": "小明在公司內負責Ubuntu Linux Server的安全工作。請問他所考慮進行防護的工作，下列哪一項錯誤？",
    "options": [
      "以TCP/IP堆疊進行考慮與佈署防護機制",
      "建請公司採購相當數量的滅火器，放置於機櫃內",
      "P/IP堆疊進行考慮與佈署防護機制",
      "考慮網路威脅程度，建置足夠的防禦縱深機制"
    ],
    "answer": "B",
    "analysis": "機櫃內應不可放置非資訊用品。"
  }
];